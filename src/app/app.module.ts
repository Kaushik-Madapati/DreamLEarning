import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Headers} from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { UserComponentComponent } from './Component/user-component/user-component.component';
import { TeacherComponentComponent } from './Component/teacher-component/teacher-component.component';
import {appRoutesProviders, routing } from './Routing/routes'
import {LoginValidation} from './Routing/LoginValidation'
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import {TeacherService} from './Service/teacher.service'
import {StudentService} from './Service/student.service';
import {RoomService} from './Service/room.service';
import {LoginService} from './Service/login.service';
import {LoginValidationService} from './Service/login-validation.service';
import { RoomComponentComponent } from './Component/room-component/room-component.component';
import { ContactComponent } from './Component/contact/contact.component';
import { TeacherInfoComponent } from './Component/teacher-info/teacher-info.component';
import { StudentInfoComponent } from './Component/student-info/student-info.component';
import { RoomInfoComponent } from './Component/room-info/room-info.component';
import { ContactInfoComponent } from './Component/contact-info/contact-info.component';
import { AddTeacherComponent } from './Component/add-teacher/add-teacher.component';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { AddRoomComponent } from './Component/add-room/add-room.component';
import { UpdateRoomComponent } from './Component/update-room/update-room.component';
import { UpdateTeacherComponent } from './Component/update-teacher/update-teacher.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';
import { ReportComponent } from './Component/report/report.component';
import { AssignmentComponent } from './Component/assignment/assignment.component';
import { StudentBackgroundComponent } from './Component/student-background/student-background.component';
import { StudentAssessmentComponent } from './Component/student-assessment/student-assessment.component';
import { AdminComponent } from './Component/admin/admin.component';
import { ContactParentComponent } from './Component/contact-parent/contact-parent.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { TodayTaskComponent } from './Component/today-task/today-task.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UserComponentComponent,
    TeacherComponentComponent,
    RoomComponentComponent,
    ContactComponent,
    TeacherInfoComponent,
    StudentInfoComponent,
    RoomInfoComponent,
    ContactInfoComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddRoomComponent,
    UpdateRoomComponent,
    UpdateTeacherComponent,
    UpdateStudentComponent,
    ReportComponent,
    AssignmentComponent,
    StudentBackgroundComponent,
    StudentAssessmentComponent,
    AdminComponent,
    ContactParentComponent,
    WelcomeComponent,
    TodayTaskComponent
   
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    routing,
    HttpModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [appRoutesProviders, TeacherService, StudentService, RoomService, LoginService, LoginValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }


