import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor-arrow',
  templateUrl: './anchor-arrow.component.html',
  styleUrls: ['./anchor-arrow.component.css']
})
export class AnchorArrowComponent implements OnInit {

  @Input() anchor?: string;
  @Input() flipped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
