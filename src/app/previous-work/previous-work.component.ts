import { Component, OnInit } from '@angular/core';

import * as projectsTemplate from "../../assets/projects.json";
import { importJsonArray } from '../import';
import { Project } from './project.interface';

@Component({
  selector: 'app-previous-work',
  templateUrl: './previous-work.component.html',
  styleUrls: ['./previous-work.component.css']
})
export class PreviousWorkComponent implements OnInit {

  projects: Project[] = importJsonArray(projectsTemplate);
  constructor() { }

  public priorProject(project: Project): string | undefined {
    const index = this.projects.indexOf(project) - 1;
    if(index < 0) return undefined;

    return `${this.projects[index].anchorTag}`;
  }

  public nextProject(project: Project): string | undefined {
    const index = this.projects.indexOf(project) + 1;
    if(index == 0 || index > this.projects.length - 1) return undefined;

    return `${this.projects[index].anchorTag}`;
  }

  ngOnInit(): void {
  }

}
