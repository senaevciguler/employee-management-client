import { EmployeeService } from './../service/employee.service';
import { Employee } from './../model/employee.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:number
  employee:Employee

  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router:Router
) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.employee = new Employee();

    if(this.id != -1){
      this.employeeService.retrieveEmployee(this.id)
      .subscribe(
      data => this.employee = data
      )
    }
  }
  
  saveEmployee(){
    if(this.id == -1){
      this.employeeService.createEmployee(this.employee)
      .subscribe(
          data =>{
            console.log(data)
            this.router.navigate(['employees'])
          } 
        
      )
    }else{
      this.employeeService.updateEmployee(this.id,this.employee)
      .subscribe(
            data =>{
            console.log(data)
            this.router.navigate(['employees'])
          } 
        
      )
    }
  }

}
