export class Employe {
  constructor(public nom: string, public prenom: string, public age: number, public emotion: string) {

  }
}

export const employes: Employe[] = [
  new Employe('toto', 'toto', 12, 'happy'),
  new Employe('tata32', 'tatata', 18, 'sad'),
  new Employe('titi', 'titi', 0, 'happy'),
  new Employe('tyty', 'tyty', 23, ''),
  new Employe('tstststs', 'tsts', 15, 'sad'),
  new Employe('tftf', 'tftf', 12, 'sad')
];
