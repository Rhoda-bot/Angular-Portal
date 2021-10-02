import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './admin/courses/courses.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { NewStaffComponent } from './admin/new-staff/new-staff.component';
import { SigninComponent } from './admin/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SetExaminationComponent } from './staff/set-examination/set-examination.component';

import { SignInComponent } from './staff/sign-in/sign-in.component';

import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StaffNavComponent } from './staff/staff-nav/staff-nav.component';
import { StudentDashboardComponent } from './students/student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './students/student-login/student-login.component';
import { StudentNavbarComponent } from './students/student-navbar/student-navbar.component';
import { StudentRegisterComponent } from './students/student-register/student-register.component';
import { StudentRecordsComponent } from './staff/student-records/student-records.component';
import { StaffProfileComponent } from './staffs/staff-profile/staff-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin',children:[
    {path:'sign-in',component:SigninComponent},
    {path:'nav',component:NavbarComponent,children:[
      {path:'courses',component:CoursesComponent},
      {path:'new-staff',component:NewStaffComponent},
      {path:'department',component:DepartmentsComponent}
    ]},
    {path:'dashboard',component:DashboardComponent}
  ]},
  {path:'portal',children:[
    {path:'login',component:StudentLoginComponent},
    {path:'register',component:StudentRegisterComponent},
    {path:'dasboard',component:StudentDashboardComponent},
    {path:'panel',component:StudentNavbarComponent}
  ]},
  
    {path:'signin',component:SignInComponent},
    {path:'dashboard',component:StaffDashboardComponent},
    {path:'panel/:email',component:StaffNavComponent,children:[
      {path:'set-exams',component:SetExaminationComponent},
      {path:'profile',component:StaffProfileComponent},
      
    ]},
    {path:'student-records',component:StudentRecordsComponent},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  // {useHash:true}
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
