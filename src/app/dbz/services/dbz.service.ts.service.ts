import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9001
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  }
  ];

  public onNewCharacter(character: Character):void {
    const newCharacter = {...character, id: uuid()}

    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  public deleteCharacterById(id: string): void {
    const deleteId = id;
    this.characters = this.characters.filter((character)=> character.id !== deleteId);
  }
}
