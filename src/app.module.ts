import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContextModule } from './context/context.module';
import {
  RequestLoggerMiddleware,
  ConfigModule,
  RateLimitMiddleware,
} from './config';
import { EntityModule } from './context/entity/entity.module';


@Module({
  imports: [
    ConfigModule,
    ContextModule,
    EntityModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
    consumer.apply(RateLimitMiddleware).forRoutes('*');
  }
}
