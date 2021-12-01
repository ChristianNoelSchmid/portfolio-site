import { Component, OnInit } from '@angular/core';
import { AnimatedText } from '../animated-text/animated-text-interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public animText: AnimatedText = {
    staticText: "Hi, I'm Chris. I write ",
    dynamicText: ['Software.', 'Web Applications.', 'Video Games.'],
  };

  constructor() {}

  ngOnInit(): void {}
}
