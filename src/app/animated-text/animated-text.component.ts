import { Component, Input, OnInit } from '@angular/core';
import { AnimatedText } from './animated-text-interface';

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.css'],
})
export class AnimatedTextComponent implements OnInit {
  /**
   * The static and dynamic text represented in this Component
   */
  @Input() animText: AnimatedText = { staticText: '', dynamicText: [''] };

  /**
   * The element where the dynamic text will be written
   */
  dynTextEl: HTMLElement | null = null;
  /**
   * The current index of the dynamic text selected in the AnimatedText array
   */
  dynTextIndex: number = -1;

  /**
   * Initializes the static text, and begins the infinite loop
   * where each dynamic text is written and deleted
   */
  async ngOnInit(): Promise<void> {
    const staticTextEl = document.querySelector('.static');
    staticTextEl!.textContent = this.animText.staticText;

    this.dynTextEl = document.querySelector('.dynamic');

    await this.loop();
  }

  /**
   * Continually cycles through the dynamic texts
   * adding them and removing them to the content
   */
  async loop() {
    while (true) {
      await this.appendDynamicText();
      await this.sleep(1000);
      await this.removeDynamicText();
    }
  }

  /**
   * Appends the current dynamic text to the overall content
   * one character at a time
   */
  async appendDynamicText() {
    this.dynTextIndex += 1;
    if (this.dynTextIndex >= this.animText?.dynamicText.length) {
      this.dynTextIndex = 0;
    }

    const text = this.animText.dynamicText[this.dynTextIndex];
    for (let i = 0; i < text.length; ++i) {
      this.dynTextEl!.textContent += text[i];
      await this.sleep(50 + Math.random() * 100);
    }
  }

  /**
   * Removes the current dynamic text from the overall content,
   * one character at a time.
   */
  async removeDynamicText() {
    const text = this.animText.dynamicText[this.dynTextIndex];

    for (let i = 0; i < text.length; ++i) {
      this.dynTextEl!.textContent = this.dynTextEl!.textContent!.substring(
        0,
        this.dynTextEl!.textContent!.length - 1
      );
      await this.sleep(75);
    }
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
