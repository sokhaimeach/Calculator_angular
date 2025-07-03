import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  combineNum: string = '';
  outputNum: string = '';

  getInput(number: string){
    this.combineNum += number;
    this.outputNum = this.combineNum;
  }

  calculate() {
    this.combineNum = eval(this.combineNum);
    this.outputNum = this.combineNum;
  }
}
