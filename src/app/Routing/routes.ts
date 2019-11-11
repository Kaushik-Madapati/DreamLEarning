import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponentComponent } from './../Component/login-component/login-component.component';
import { UserComponentComponent } from './../Component/user-component/user-component.component';
import { TeacherComponentComponent } from './../Component/teacher-component/teacher-component.component';
import {RoomComponentComponent}from './../Component/room-component/room-component.component'
import {ContactComponent}from './../Component/contact/contact.component'
import {TeacherInfoComponent}from './../Component/teacher-info/teacher-info.component'
import {RoomInfoComponent}from './../Component/room-info/room-info.component'
import {StudentInfoComponent}from './../Component/student-info/student-info.component'
import {AddTeacherComponent}from './../Component/add-teacher/add-teacher.component'
import {AddStudentComponent}from './../Component/add-student/add-student.component'
import {AddRoomComponent}from './../Component/add-room/add-room.component'
import {UpdateRoomComponent}from './../Component/update-room/update-room.component'
import {UpdateStudentComponent}from './../Component/update-student/update-student.component'
import {ReportComponent}from './../Component/report/report.component'
import {AssignmentComponent}from './../Component/assignment/assignment.component'
import {StudentBackgroundComponent}from './../Component/student-background/student-background.component'
import {StudentAssessmentComponent}from './../Component/student-assessment/student-assessment.component'
import {LoginValidationService}from './../Service/login-validation.service'
import {LoginService}from './../Service/login.service'
import {AdminComponent} from './../Component/admin/admin.component'
import {ContactParentComponent} from './../Component/contact-parent/contact-parent.component'
import {WelcomeComponent} from './../Component/welcome/welcome.component'
import {TodayTaskComponent} from './../Component/today-task/today-task.component'









const appRoutes: Routes = [
   {path:"",component:LoginComponentComponent,pathMatch:'full'},
   {path:'login', component: LoginComponentComponent,pathMatch:'full'},
   {path:'students',canActivate:[LoginService], component:UserComponentComponent,pathMatch:'full'},
   {path:'teachers',canActivate:[LoginService], component:TeacherComponentComponent,pathMatch:'full'},
   {path:'rooms',canActivate:[LoginService], component:RoomComponentComponent,pathMatch:'full'},
   {path:'contact',canActivate:[LoginService], component:ContactComponent,pathMatch:'full'},
   {path:'report',canActivate:[LoginService], component:ReportComponent,pathMatch:'full'},
   {path:'assignment',canActivate:[LoginService], component:AssignmentComponent,pathMatch:'full'},
   {path:'admin',canActivate:[LoginService], component:AdminComponent,pathMatch:'full'},
   {path:'teacher-info',component:TeacherInfoComponent,pathMatch:'full'},
   {path:'room-info',component:RoomInfoComponent,pathMatch:'full'},
   {path:'room-info/:type',component:RoomInfoComponent,pathMatch:'full'},
   {path:'student-info',component:StudentInfoComponent,pathMatch:'full'},
   {path:'add-teacher',component:AddTeacherComponent,pathMatch:'full'},
   {path:'add-student',component:AddStudentComponent,pathMatch:'full'},
   {path:'add-room',component:AddRoomComponent,pathMatch:'full'},
   {path:'update-room',component:UpdateRoomComponent,pathMatch:'full'},
   {path:'update-student',component:UpdateStudentComponent,pathMatch:'full'},
   {path:'student-background',component:StudentBackgroundComponent,pathMatch:'full'},
   {path:'student-assessment',component:StudentAssessmentComponent,pathMatch:'full'},
   {path:'contact-parent',component:ContactParentComponent,pathMatch:'full'},
   {path:'welcome',component:WelcomeComponent,pathMatch:'full'},
   {path:'today-task',component:TodayTaskComponent,pathMatch:'full'},


  
      
];
export const appRoutesProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes); 