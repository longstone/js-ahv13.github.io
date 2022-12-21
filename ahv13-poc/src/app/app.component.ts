import { Component } from '@angular/core';
import { AHV13 } from 'ahv13-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ahv13-poc';
  ahvNumber?:string;
  isValid?: boolean = undefined;
  labelValid:string ='';
  checkSum?:number ;

  constructor(){
this.update('756.9217.0769.85');
  }

  update($event:string){
    this.ahvNumber = $event
    this.checkValid();
    this.calculateChecksum();
  }

  checkValid() {
    this.isValid  = new AHV13().isValid(this.ahvNumber??'');
    if(this.ahvNumber){
      this.labelValid = this.isValid?'valid':'invalid';
    } else {
      this.labelValid ='';
    }
  }

  calculateChecksum(){
    this.checkSum = new AHV13().checkSum(this.ahvNumber??'');
  }
}



