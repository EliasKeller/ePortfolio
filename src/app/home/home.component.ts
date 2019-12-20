import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public logoFCB = './assets/images/logoFCB.jpg';
  public logo = './assets/images/Logo.svg';
  constructor() { }

  ngOnInit() {
  }

}
