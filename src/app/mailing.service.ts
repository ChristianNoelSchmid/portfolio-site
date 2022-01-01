import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailingService {
  mailingHost: string =
    'https://us-west1-christian-s-software.cloudfunctions.net/portfolio-site-send-message';

  constructor(private http: HttpClient) {}

  public sendMessage(name: string, email: string, message: string) {
    console.log(
      `Recieved request to send message: ${{ name, email, message }}`
    );

    const body = new FormData();
    body.append('name', name);
    body.append('email', email);
    body.append('message', message);

    return this.http.post(this.mailingHost, body, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
