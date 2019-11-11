import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import {IStudent} from './../../Interface/student'
import { Observable } from 'rxjs'
import {StudentService } from './../../Service/student.service';

@Component({
  selector: 'app-contact-parent',
  templateUrl: './contact-parent.component.html',
  styleUrls: ['./contact-parent.component.css']
})
export class ContactParentComponent implements OnInit {

  constructor(private _studentService:StudentService,
    private _router:Router) { }

  ngOnInit() {
    this.getStudents();
  }
  students: IStudent[];
  student: IStudent = new IStudent();
  errorMessage: String;
  observableStudents: Observable<IStudent[]> 
  student_id: number;
  deleteMessage: String;

  getStudents():void {
    this.observableStudents = this._studentService.getAllStudents();
    this.observableStudents.subscribe(
      students => this.students = students,
      error => this.errorMessage = <any>error); 
}
sendStudentMessage(id:number): void {

}

ContactAllStudents() : void {

}

}








