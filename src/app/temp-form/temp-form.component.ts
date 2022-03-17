import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  constructor(private sService : StorageService) { }

  // cNumber="";
  // empName="";
  // salary="";

  onSubmit(form: NgForm) {
    const name = form.value.empName;
    const cNo = form.value.cNumber;
    const sal = form.value.salary;
    if(name.length == 0 || cNo.length != 10 || sal.length == 0 ){
      alert("Invalid input!...");
      return;
    }
    
    // const employee = {"id" : this.cNumber , "name" : this.empName , "sal" : this.salary};
    const employee = new Employee(form.value.empName , form.value.cNumber , form.value.salary);
    //const employee = {"id" : form.value.cNumber , "name" : form.value.empName , "sal" : form.value.salary};
    this.sService.employeeDetails(employee);
    
  }


  ngOnInit(): void {
  }

}
