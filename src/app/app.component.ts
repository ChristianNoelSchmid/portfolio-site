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
      ['background-color', '#555'],
      ['layout-accent-color', '#665'],
      ['primary-color', '#e66b2e'],
      ['primary-font', 'Raleway, sans-serif'],
      ['header-font', '"Source Code Pro", serif'],
      ['text-shadow', '2px 2px 5px #0009'],
    ]);

    Array.from(colors.entries()).forEach(([name, value]) => {
      document.body.style.setProperty(`--${name}`, value);
    });
  }
}
