import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'service_9ut851g';
  private templateId = 'template_cu2csmw';
  private userId = '-laSpD2jCGWq7tF4x';

  sendEmail(form: HTMLFormElement): Observable<any> {
    return from(emailjs.sendForm(this.serviceId, this.templateId, form, this.userId));
  }
}
