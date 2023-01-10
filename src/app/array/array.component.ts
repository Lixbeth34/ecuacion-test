import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  constructor() { }
arrayx: number[] =[];
vala=0;
valb=0;
show = "";

  btnres(){
   this.arrayx = calculo(this.arrayx,this.vala,this.valb);
   this.show = "[" +this.arrayx[0]+","+this.arrayx[1]+","+this.arrayx[2]+","+this.arrayx[3]+ "]";
  }  
}

export function calculo(arrx:Array <number>,a :number,b :number){
  
  for (let i=0; i< arrx.length;i++){
    arrx[i] = arrx[i] *a +b;
  }
  return arrx;    
  }

