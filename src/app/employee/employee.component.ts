import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeArray:any=[];
  ngOnInit(): void {
    const localData=localStorage.getItem('employeelist')
    if(localData !== null){
      this.employeeArray=JSON.parse(localData);
      console.log(this.employeeArray)
    }
  }
}
