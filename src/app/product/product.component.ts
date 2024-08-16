import { Component ,OnInit} from '@angular/core';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productForm:FormGroup
  listData:any;
   constructor(private fb:FormBuilder){
    this.listData=[];    
    this.productForm=this.fb.group({  
      productid:['',Validators.required],
      productname:['',Validators.required],
      category:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    })

   }
   public additem():void{
    this.listData.push(this.productForm.value);
     
   }
  reset(){
    this.productForm.reset();
  }
  remove(element: any){
   this.listData.forEach((value: any,index: any) => {
    if(value === element)
    this.listData.splice(index,1);
    
   });
  }
  
     ngOnInit(): void {
       
     }

}
