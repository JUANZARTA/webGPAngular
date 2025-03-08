import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  sendEmail(event: Event) {
    event.preventDefault(); // Evita recargar la página

    this.emailService.sendEmail(event.target as HTMLFormElement).subscribe(
      () => {
        let successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
      },
      () => {
        let errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
      }
    );
  }
}
