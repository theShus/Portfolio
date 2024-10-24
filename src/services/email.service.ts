import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    emailjs.init(environment.emailJsUserId);
  }

  sendEmail(userName: string, userEmail: string, subject: string, message: string) {
    emailjs.send(environment.emailJsServiceId,environment.emailJsTemplateId,{
      from_name: userName,
      message: message,
      subject: subject,
      from_email: userEmail,
    });
  }
}
