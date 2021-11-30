import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Christian S. Software';

  ngOnInit() {
    this.initGlobalCSS();
  }

  ngAfterViewInit() {
    this.addAnchorOffsets();
  }

  private initGlobalCSS() {
    const colors = new Map([
      ['background-color', '#555'],
      ['alt-background-color', '#a62b00'],
      ['alt-border-color', '#862b00'],
      ['primary-color', '#e66b2e'],
      ['primary-font', 'Raleway, sans-serif'],
      ['header-font', '"Source Code Pro", serif'],
      ['text-shadow', '2px 2px 5px #0009'],
    ]);

    Array.from(colors.entries()).forEach(([name, value]) => {
      document.body.style.setProperty(`--${name}`, value);
    });
  }

  private addAnchorOffsets() {
    // Select all links with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      // Get the node associated with the anchor link
      const node = document.querySelector(anchor.getAttribute('href')!);

      // If the node exists, add the anchor class to it
      if(node != null) {
        node.classList.add('anchor');
      }
    });

  }
}
