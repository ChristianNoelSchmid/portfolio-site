import { Component, Input, OnInit } from '@angular/core';
import { AnimatedText } from '../AnimatedText';

@Component({
  selector: 'app-dyn-text',
  templateUrl: './dyn-text.component.html',
  styleUrls: ['./dyn-text.component.css']
})
export class DynTextComponent implements OnInit {

  @Input() animText: AnimatedText = { staticText: "", dynamicText: [""] }

  dynTextEl: HTMLElement | null = null;
  dynTextIndex: number = -1;

  async ngOnInit(): Promise<void> {
    const staticTextEl = document.querySelector('.static');

    if(staticTextEl) 
      staticTextEl.textContent = this.animText?.staticText ?? "";

    this.dynTextEl = document.querySelector('.dynamic');

    await this.loop();
  }

  async loop() {
    while(true) {
      await this.appendDynamicText();
      await this.sleep(1000);
      await this.removeDynamicText();
    }
  }

  async appendDynamicText() {

    this.dynTextIndex += 1;
    if(this.dynTextIndex >= this.animText?.dynamicText.length) {
      this.dynTextIndex = 0;
    }
    
    const text = this.animText.dynamicText[this.dynTextIndex];
    for(let i = 0; i < text.length; ++i) {
      this.dynTextEl!.textContent += text[i];
      await this.sleep(100);
    }
  }

  async removeDynamicText() {
    const text = this.animText.dynamicText[this.dynTextIndex];

    for(let i = 0; i < text.length; ++i) {
      this.dynTextEl!.textContent = this.dynTextEl!.textContent!.substring(0, this.dynTextEl!.textContent!.length - 1)
      await this.sleep(100);
    }
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
