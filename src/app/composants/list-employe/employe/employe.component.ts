import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @Output() estPresent: EventEmitter<boolean> = new EventEmitter<boolean>();

  disableBtn = '';
  idf: number;

  @Input() employe;
  @Input() set  id(id: number) {
    this.idf = id + 1 ;
  }

  constructor() { }

  ngOnInit() {
  }

  pres(presence: boolean) {
    this.estPresent.emit(presence);
    this.disableBtn = 'disabled';
  }

}
