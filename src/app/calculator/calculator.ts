import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
    this.liveOutput();
    this.playSound();
  }

  calculate() {
    if (this.combineNum == '') return;
    this.combineNum = eval(this.combineNum).toString();
    this.outputNum = this.combineNum;
  }

  reset() {
    this.combineNum = '';
    this.outputNum = '';
  }

  delete() {
    if (this.combineNum == '') return;
    const deleteNum = this.combineNum.split('');
    this.combineNum = '';
    for(let i = 0; i < deleteNum.length - 1; i++){
      this.combineNum += deleteNum[i];
    }
    this.liveOutput();
  }

  liveOutput() {
    const shownum = this.combineNum.split('');
    this.outputNum = '';
    for(let i = 0; i< shownum.length; i++){
      if(shownum[i] == '*')
        this.outputNum += '×';
      else if(shownum[i] == '/')
        this.outputNum += '÷';
      else this.outputNum += shownum[i];
    }
  }
  playSound(){
    const click = new Audio();
    click.src = 'sound.mp3';
    click.play();
  }
}


