import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  offsetY: number = 0;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener(
      'scroll', 
      event => this.offsetY = window.scrollY
    );
  }

}
