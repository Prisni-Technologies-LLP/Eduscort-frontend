/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentAttendanceService {

  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { } 
  updateStudentAttendance(attendance:String, id:number, date:Date): Observable<Object>{
    return this.http.put(`${this.baseUrl}/update-student-attendance/${id}/${date}`, date);
  }

}
