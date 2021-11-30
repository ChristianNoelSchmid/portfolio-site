import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slanted-section',
  templateUrl: './slanted-section.component.html',
  styleUrls: ['./slanted-section.component.css']
})
export class SlantedSectionComponent implements OnInit {

  @Input() color: string = 'white';
  @Input() flipped: boolean = false;
  @Input() childClasses: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
