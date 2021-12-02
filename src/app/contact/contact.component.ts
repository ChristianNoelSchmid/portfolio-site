import { Component, OnInit } from '@angular/core';
import { MailingService } from '../mailing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private mailingService: MailingService) {}

  ngOnInit(): void {}

  public async sendMail() {
    // For now, sendMail does not do anything
    // TODO
    /*const name = document.querySelector('#name')?.getAttribute("value");
    const email = document.querySelector('#email')?.getAttribute("value");
    const message = document.querySelector('#email')?.getAttribute("message");

    if(name && email && message) {
      this.mailingService.sendMessage(name, email, message)
        .subscribe(res => console.log(res.status))
    }*/
  }
}
