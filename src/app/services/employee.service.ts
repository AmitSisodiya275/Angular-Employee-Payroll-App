import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://localhost:8080/emppayroll";
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/get`);
  }

  addEmployeee(model:any){
    return this.http.post<any>(`${this.baseUrl}/add`, model);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }
}
