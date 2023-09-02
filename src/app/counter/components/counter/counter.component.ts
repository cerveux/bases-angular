import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>counter: {{ counter }}</h3>



  <button (click)="increaseBy()" >+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)" >-1</button>`
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(value: number = 1): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }


}
