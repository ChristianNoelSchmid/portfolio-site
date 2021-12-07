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

  ngOnInit(): void {}

  public sendMail(event: Event) {
    // Ensure the form doesn't navigate away
    event.preventDefault();

    console.log(`${this.name} <${this.email}>: ${this.message}`);

    if (this.name && this.email && this.message) {
      this.mailingService
        .sendMessage(this.name, this.email, this.message)
        .subscribe((res) => {
          console.log(`${res.status}: ${res.body}`);
        });
    }
  }
}
