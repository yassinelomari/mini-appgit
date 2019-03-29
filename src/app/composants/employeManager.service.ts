import {Employe} from './list-employe/employe';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmployeManagerService {
  listEmploye: Employe[] = [];
  url = 'http://127.0.0.1:3000/employees';

  constructor(private http: HttpClient) {

  }

  getEmps(): Employe[] {

    const emp1 = new Employe('toto32', 'toto', 0, 'happy');
    const emp2 = new Employe('tata522', 'tata963', 12, 'happy');
    const emp4 = new Employe('titi', 'titi', 12, '');
    const emp5 = new Employe('tntn', 'tntn5', 12, 'sad');
    const emp3 = new Employe('tsts325', 'tsts', 12, 'happy');
    const emp6 = new Employe('tftf', 'tftf', 12, 'sad');

    this.listEmploye.push(emp1);
    this.listEmploye.push(emp2);
    this.listEmploye.push(emp3);
    this.listEmploye.push(emp4);
    this.listEmploye.push(emp5);
    this.listEmploye.push(emp6);


    return this.listEmploye;
  }

  public getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url);
  }

  public addEmployes(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.url, employe);
  }

  public deleteEmployes(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  public putEmployes(id: number, employe: Employe): Observable<any> {
    return this.http.put<any>(this.url + '/' + id, employe);
  }
}
