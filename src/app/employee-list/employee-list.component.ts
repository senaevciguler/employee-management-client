import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.module';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]
  message:String

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees(){
    return this.employeeService.retrieveAllEmployees().subscribe(
      response =>{
        console.log(response);
        this.employees = response;
      }
    )
  }
  
  
  deleteEmployee(id){
    console.log(`delete employee ${id}`)
    this.employeeService.deleteEmployee(id).subscribe(
      response => {
        console.log(response);
        this.message =`Delete of Employee ${id} Successful!`;
        this.refreshEmployees();
      }
    )
  }
  updateEmployee(id){
  console.log(`update ${id}`)
  this.router.navigate(['employees', id])
  }

  addEmployee(){
    this.router.navigate(['employees', -1])
  }

}
