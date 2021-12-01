import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SkillGroup } from './skill.interface';

import * as skillGroupTemplate from '../../assets/skills.json';
import { importJsonArray } from '../import';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('scrollFromLeft', [
      state(
        'offScreen',
        style({
          transform: 'translate(-50px)',
          opacity: '0',
        })
      ),
      state(
        'onScreen',
        style({
          transform: 'translate(0px)',
          opacity: '100%',
        })
      ),
      transition('offScreen => onScreen', [animate('0.75s ease-in-out')]),
    ]),
  ],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillGroups: SkillGroup[] = importJsonArray(skillGroupTemplate);
  visibleGroupIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const skillsNodes = document.querySelectorAll('.skill-list > *')!;
    setInterval(() => {
      skillsNodes.forEach((skillNode, i) => {
        const rect = skillNode.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150 && this.visibleGroupIndex < i)
          this.visibleGroupIndex += 1;
      });
    }, 100);
  }
}
