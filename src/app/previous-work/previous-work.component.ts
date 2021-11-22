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

  ngOnInit(): void {
  }

}
