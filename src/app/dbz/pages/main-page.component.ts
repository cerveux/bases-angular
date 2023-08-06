import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500
  },
  {
    name: 'Goku',
    power: 9001
  },
  {
    name: 'Vegeta',
    power: 8500
  }
  ];

  onNewCharacter(character: Character ):void {
    console.log(character);


  }


}
