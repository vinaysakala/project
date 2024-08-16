import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
   employeeObj={
    "employeeId":"",
    "employeeName":"",
    "department":"",
    "salary":"",
    "position":""
   }
   employeeArray:any=[];
   ngOnInit(): void {
    const localData=localStorage.getItem('employeelist')
     if (localData !== null){
      this.employeeArray = JSON.parse(localData);

     }
   }
   addEmployee(){
    const localData=localStorage.getItem('employeelist')
    if(localData==null){
      this.employeeArray.push(this.employeeObj);
      localStorage.setItem('employeelist',JSON.stringify(this.employeeArray))
    }else{
      const parseData = JSON.parse(localData);
      this.employeeArray.push(this.employeeObj);
      localStorage.setItem('employeelist',JSON.stringify(this.employeeArray));
    }
   }
   
}
