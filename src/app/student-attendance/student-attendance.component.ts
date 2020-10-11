import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToWelcomePage(){
    this.router.navigate(['']);
  }

}
