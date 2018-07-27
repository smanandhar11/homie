import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {
  inputActive = false;
  constructor() {
  }

  ngOnInit() {
  }

  addPass() {
    this.inputActive = true;
  }
  // passSubmit() {
  //   this.inputActive = false;
  // }

}
