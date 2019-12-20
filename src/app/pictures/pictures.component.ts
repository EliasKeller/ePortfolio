import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  public compare1Default = './assets/images/compare1default.jpg';
  public compare1Edit = './assets/images/compare1.jpg';

  public compare2Default = './assets/images/compare2default.jpeg';
  public compare2Edit = './assets/images/compare2.png';

  public compare3Default = './assets/images/compare3default.jpg';
  public compare3Edit = './assets/images/compare3.jpg';

  constructor() { }

  ngOnInit() {
  }
}
