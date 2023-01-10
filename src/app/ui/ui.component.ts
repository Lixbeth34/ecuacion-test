import { Component } from '@angular/core';
import { calculo } from '../array/array.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  arrayx: number[] =[];
  a=0;
  b=0;
  Result: any;
  vala=0;
  valb=0;
  show = "";

  btnres(){
    this.arrayx = calculo(this.arrayx,this.vala,this.valb);
    this.show = "[" +this.arrayx[0]+","+this.arrayx[1]+","+this.arrayx[2]+","+this.arrayx[3]+ "]";
   }  

  calculo(){
    let myresult = [];
    let array: number[] = this.arrayx
    myresult = calculo(array,this.vala,this.valb);
    this.Result = myresult
 }
}
