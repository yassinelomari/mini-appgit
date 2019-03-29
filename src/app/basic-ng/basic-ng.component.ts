import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng',
  templateUrl: './basic-ng.component.html',
  styleUrls: ['./basic-ng.component.css']
})
export class BasicNgComponent implements OnInit {

  title1 = '1 - composant'
  constructor() { }

  ngOnInit() {
  }

}
