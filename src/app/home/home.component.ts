import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private logoFCB = './assets/images/logoFCB.jpg';
  constructor() { }

  ngOnInit() {
  }

}
