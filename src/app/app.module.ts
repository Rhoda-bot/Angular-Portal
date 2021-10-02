import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './admin/signin/signin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule} from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { SignInComponent } from './staff/sign-in/sign-in.component';
import { SignUpComponent } from './staff/sign-up/sign-up.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StudentLoginComponent } from './students/student-login/student-login.component';
import { StudentRegisterComponent } from './students/student-register/student-register.component';
import { StudentDashboardComponent } from './students/student-dashboard/student-dashboard.component';
import { StudentNavbarComponent } from './students/student-navbar/student-navbar.component';
import { StudentProfileComponent } from './students/student-profile/student-profile.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StaffNavComponent } from './staff/staff-nav/staff-nav.component';
import {MatCardModule} from '@angular/material/card';
import { NewStaffComponent } from './admin/new-staff/new-staff.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { CoursesheetComponent } from './admin/coursesheet/coursesheet.component';
import { DepartmentsheetComponent } from './admin/departmentsheet/departmentsheet.component';
import { SetExaminationComponent } from './staff/set-examination/set-examination.component';
import { StudentRecordsComponent } from './staff/student-records/student-records.component';
import { StaffProfileComponent } from './staffs/staff-profile/staff-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    StaffDashboardComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    StudentDashboardComponent,
    StudentNavbarComponent,
    StudentProfileComponent,
    HomeComponent,
    NotfoundComponent,
    StaffNavComponent,
    NewStaffComponent,
    CoursesComponent,
    DepartmentsComponent,
    CoursesheetComponent,
    DepartmentsheetComponent,
    SetExaminationComponent,
    StudentRecordsComponent,
    StaffProfileComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
   ReactiveFormsModule,
   MatStepperModule,
   MatExpansionModule,
   MatOptionModule,
   MatSelectModule,
   MatDialogModule,
   MatBottomSheetModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
