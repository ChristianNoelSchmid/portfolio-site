import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-site';
  ngOnInit() {
    const colors = new Map([
      ['primary-color', '#FA1E0D'],
      ['primary-font', 'Raleway, sans-serif'],
      ['header-font', '"Source Code Pro", serif']
    ])

    Array.from(colors.entries()).forEach(([name, value]) => {
      document.body.style.setProperty(`--${name}`, value);
    })
  }
}
