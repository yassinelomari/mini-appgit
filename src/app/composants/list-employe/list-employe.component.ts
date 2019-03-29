import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  @Input() list;
  title = 'employes';

  listPresent = [];
  listAbsent = [];
  constructor() { }

  ngOnInit() {
  }

  conter(id: number, prese: boolean) {
    if (prese) {
      if (this.listPresent.indexOf(id) === -1) {
        this.listPresent.push(id);
      }
    } else {
      if (this.listAbsent.indexOf(id) === -1) {
        this.listAbsent.push(id);
      }
    }

  }
}
