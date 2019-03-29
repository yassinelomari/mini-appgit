import { Component, OnInit } from '@angular/core';
import {Employe, employes} from './list-employe/employe';
import {EmployeManagerService} from './employeManager.service';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.css']
})
export class ComposantsComponent implements OnInit {
  title1 = '1- affichage de données (interpolation + derictive structurelles )';
  title2 = '2- derictive attribute';
  title3 = '3- liaison de données entre template et le controleur';
  title4 = '4- Pipe';
  title5 = '5- Derictive';
  title6 = '6- HttpClient';
  name = 'yassin';
  listeEmps: Employe [];
  toDay = new Date();
  base = 10;
  puissance = 1;
  employes = [];
  emotion = true;
  // listeEmps: Employe [] = employes;

  // variable pour les directive
  color = 'blue';

  // list recupirer with httpClient
  list: Employe[];

  id = null;

  constructor(private empList: EmployeManagerService) { }

  ngOnInit() {
    this.listeEmps = this.empList.getEmps();
    this.getEmps();

  }

  getColor(length: number) {
    if (length <= 4) {
      return 'text-success';
    } else if (length <= 6) {
      return 'text-primary';
    }  else if (length <= 8 ) {
      return 'text-danger';
    }
  }

  onAction() {
    if (!this.name.includes('Mon prenom est: ')) {
      this.name = 'Mon prenom est: ' + this.name;
    }
  }

  addEmploye(emp: string) {
    console.log(this.emotion);
    const emo = this.emotion ? 'heureux' : 'triste';

    this.employes.push(new Employe(emp , emp , 20 , emo));
  }

  renitialiser() {
    this.employes = [];
  }

  getEmps() {
    this.empList.getEmployes().subscribe(
      (listEmpl: Employe[]) => {
        // console.log(listEmpl);
        this.list = listEmpl;
      },
      (error) => {
        console.log('error perso');
        console.log(error);
      }, () => {
        console.log('c est fini');
      });
  }

  addEmp() {
    const emp = new Employe('kkk', 'kkk', 0, '');
    this.empList.addEmployes(emp).subscribe((Empl) => {
      console.log(Empl);
    });
  }

  deleteEmp() {
    this.empList.deleteEmployes(this.id).subscribe();
  }

  putEmp() {
    const emp = new Employe('yassin', 'elo', 0, '');
    this.empList.putEmployes(this.id, emp).subscribe();
  }
}
