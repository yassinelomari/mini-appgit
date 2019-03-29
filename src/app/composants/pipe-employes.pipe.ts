import {Pipe, PipeTransform} from '@angular/core';
import {Employe} from './list-employe/employe';

@Pipe({name: 'EmployesHeureux'})
export class EmployesHeureux implements PipeTransform {
  transform(employes: Employe[]): any {

    return employes.filter(emp => emp.emotion === 'heureux');
  }

}

@Pipe({name: 'EmployesHeureuxImpur', pure: false})
export class EmployesHeureuxImpur extends EmployesHeureux {

}
