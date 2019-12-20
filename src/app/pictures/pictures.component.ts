import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  private compare1Default = './assets/images/compare1default.jpg';
  private compare1Edit = './assets/images/compare1.jpg';

  private compare2Default = './assets/images/compare2default.jpeg';
  private compare2Edit = './assets/images/compare2.png';

  private compare3Default = './assets/images/compare3default.jpg';
  private compare3Edit = './assets/images/compare3.jpg';

  constructor() { }

  ngOnInit() {
  }
}
