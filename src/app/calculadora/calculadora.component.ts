import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo = 'Calculadora';
  op1: number = 0;
  op2: number = 0;
  suma: number = 0;

  sumarOperandos():void {
    this.suma = this.op1 + this.op2;
  }
}
