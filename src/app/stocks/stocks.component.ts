import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  stockForm:FormGroup;
  stockdata:any;
  constructor(private fb:FormBuilder){
     this.stockdata=[];
     this.stockForm=this.fb.group({
      stockid:['',Validators.required],
      productid:['',Validators.required],
      quatity:['',Validators.required],
      transactiontype:['',Validators.required],
      timestamp:['',Validators.required]
    })
  }
  public additem():void{
   
    this.stockdata.push(this.stockForm.value);
    console.log(this.stockdata)
        
   }
   reset(){
    this.stockForm.reset();
  }

}
