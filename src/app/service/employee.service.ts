
import{environment} from 'src/environments/environment';
import { Employee } from './../model/employee.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http:HttpClient) { }

  retrieveAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.baseURL}/employees`);
   
  }
  deleteEmployee( id){
    return this.http.delete(`${environment.baseURL}/employees/${id}`);
  }
  retrieveEmployee(id){
    return this.http.get<Employee>(`${environment.baseURL}/employees/${id}`);
  }
  updateEmployee(id,employee){
    return this.http.put(`${environment.baseURL}/employees/${id}`
    ,employee);
  }
  createEmployee(employee){
    return this.http.post(`${environment.baseURL}/employees/`
    ,employee);
  }
  
}
