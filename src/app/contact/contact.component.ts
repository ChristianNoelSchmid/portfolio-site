import { Component, Input, OnInit } from '@angular/core';
import { MailingService } from '../mailing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private mailingService: MailingService) {}

  @Input() public name: string = '';
  @Input() public email: string = '';
  @Input() public message: string = '';
  public isSending: boolean = false;
  public loadRotation: number = 0;
  public sendStatus: string = '';

  ngOnInit(): void {
    setInterval(() => (this.loadRotation += 12), 20);
  }

  public sendMail(event: Event) {
    // Ensure the form doesn't navigate away
    event.preventDefault();

    if (this.name && this.email && this.message) {
      this.sendStatus = 'Sending...';
      this.isSending = true;

      this.mailingService
        .sendMessage(this.name, this.email, this.message)
        .subscribe((res) => {
          if (res.status == 200) this.sendStatus = 'Sent!';
          else
            this.sendStatus =
              'Oops! There was a problem. Please try again later.';

          console.log(`${res.status}: ${res.body}`);
          this.isSending = false;
        });
    } else {
      this.sendStatus = 'Please fill out all the boxes. Thanks!';
    }
  }
}
