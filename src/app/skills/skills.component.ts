import { Component, Input, OnInit } from '@angular/core';
import { SkillGroup } from './skill.interface';

import * as skillGroupTemplate from "../../assets/skills.json";
import { importJsonArray } from '../import';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillGroups: SkillGroup[] = importJsonArray(skillGroupTemplate);
  selectedSkillGroup?: SkillGroup;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.skillGroups);
  }

  public setSkillGroup(skillGroup: SkillGroup | undefined = undefined) {
    this.selectedSkillGroup = skillGroup;
  }

}
