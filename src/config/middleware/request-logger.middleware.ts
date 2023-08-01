import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('Request');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;

    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(
        `Request: ${method} - ${originalUrl} from ${ip}, Status Code: ${statusCode}`,
      );
      if (statusCode === 500) {
        this.logger.error(
          `Request: ${method} - ${originalUrl} from ${ip}, Status Code: ${statusCode}`,
        );
      }
    });

    next();
  }
}
