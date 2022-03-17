import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Employee } from '../employee.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-rect-form',
  templateUrl: './rect-form.component.html',
  styleUrls: ['./rect-form.component.css']
})
export class RectFormComponent implements OnInit {

  constructor(private sService : StorageService) { }


    myRectForm = new FormGroup({
    cNumber: new FormControl(''),
    empName: new FormControl(''),
    salary: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.myRectForm.value.empName;
    const cNo = this.myRectForm.value.cNumber;
    const sal = this.myRectForm.value.salary;
    if(name.length == 0 || cNo.length != 10 || sal.length == 0 ){
      alert("Invalid input!...");
      return;
    }
    const employee = new Employee(name ,cNo , sal);
    this.sService.employeeDetails(employee);
  }

}
