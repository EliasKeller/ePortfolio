import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  private compare1;
  private compare1Default = './assets/images/compare1default.jpg';
  private compare1Edit = './assets/images/compare1.jpg';

  private compare2;
  private compare2Default = './assets/images/compare2default.png';
  private compare2Edit = './assets/images/compare2.png';

  private compare3;
  private compare3Default = './assets/images/compare3default.jpg';
  private compare3Edit = './assets/images/compare3.jpg';

  constructor() { }

  ngOnInit() {
    this.compare1 = this.compare1Default;
    this.compare3 = this.compare3Default;
  }
  public changeImage1(): void {
    if (this.compare1 === this.compare1Default) {
      this.compare1 = this.compare1Edit;
    } else {
      this.compare1 = this.compare1Default;
    }
  }

  public changeImage2(): void {
    if (this.compare2 === this.compare2Default) {
      this.compare2 = this.compare2Edit;
    } else {
      this.compare2 = this.compare2Default;
    }
  }

  private changeImage3(): void {
    if (this.compare3 === this.compare3Default) {
      this.compare3 = this.compare3Edit;
    } else {
      this.compare3 = this.compare3Default;
    }
  }
}
