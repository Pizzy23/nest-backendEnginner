import * as bcrypt from 'bcrypt';
const saltRounds = 10;
import * as EmailValidator from 'email-validator';
import {
  CheckPassword,
  Compare,
  Encrypt,
  TokenGenerator,
} from '../../../view/interface';
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  constructor() {}
  async encrypt(password: string): Promise<string> {
    const encry = await bcrypt.hash(password, saltRounds);
    return encry;
  }

  checkPassword(password: string, confirmPassword: string): CheckPassword {
    const regexUppercase = /[A-Z]/;
    const regexSpecialSymbol = /[^a-zA-Z0-9]/;
    if (
      password == confirmPassword &&
      password.length >= 8 &&
      regexUppercase.test(password) &&
      regexSpecialSymbol.test(password)
    ) {
      return true;
    }

    return false;
  }

  async compare(passaword: string, hash: string): Promise<Compare> {
    const compare = await bcrypt.compare(passaword, hash);
    return compare;
  }

  emailValidate(email: string): boolean {
    const valide = EmailValidator.validate(email);
    if (valide) return true;
    if (!valide) return false;
    return false;
  }
  tokenGenerator(): TokenGenerator {
    const length = 6;
    const characters = '0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
  }
  sendMail(email: string, txt: string, subject: string) {
    const configMail = this.configMail();
    const mailOptions = {
      from: configMail.sender.email,
      to: email,
      subject: subject,
      text: txt,
    };
    configMail.transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        throw new Error(error);
      }
    });
  }
  private configMail(): any {
    const sender = {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    };
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: sender.email,
        pass: sender.password,
      },
    });
    return { sender: sender, transporter: transporter };
  }
  date(): string {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
