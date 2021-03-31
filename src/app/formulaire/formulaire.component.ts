import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  nom = 'Grégoire';
  prenom = 'Nathan';
  age = '20';
  sexe = 'Homme';
  mail = 'n.gregoire@students.ephec.be';
  tel = '0473 012 345';
}