import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Student } from './student';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class StudentService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'students/');  
  }  
  getClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'classes/');
  }
  createStudent(student: object): Observable<object> {  
    
    return this.http.post(`${this.baseUrl}`+'students/', student);  
  }  
  
  deleteStudent(id: number, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/delete-student/${id}`, value);  
  }  
  
  getStudent(id: number): Observable<any> {  
    return this.http.get<Student>(`${this.baseUrl}/students/${id}`);  
  }  
  
  updateStudent(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/update-student/${id}`, value);  
  }  
  getStudentsByClasses(class_name:String): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-students-by-class/${class_name}`);
  }  
    
}  