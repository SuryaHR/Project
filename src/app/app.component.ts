import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  myEmployees : Employee[] = [];

  constructor(private sService : StorageService) { }
  
  title = 'myProject';

  ngOnInit(): void {
    this.sService.empSub.subscribe((employees) => {
      this.myEmployees = [...employees];
    })
  }
}
