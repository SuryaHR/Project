import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  myEmployees : Employee[] = [];
  empSub = new Subject<Employee[]>();

  employeeDetails(employee: Employee) {
      let name = employee.name;
      for(let employee of this.myEmployees){
        if(name == employee.name){
          alert("User Already exists!...")
          return;
        }
      }

      this.myEmployees.push(employee);
      this.empSub.next(this.myEmployees);
  }

  getEmployeeDetails() {
    return this.myEmployees;
  }

  constructor() { }
}
