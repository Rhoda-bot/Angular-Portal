import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { map, shareReplay } from 'rxjs/operators';
import { SetExaminationComponent } from '../set-examination/set-examination.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-staff-nav',
  templateUrl: './staff-nav.component.html',
  styleUrls: ['./staff-nav.component.css']
})
export class StaffNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private _bottomSheet:MatBottomSheet, private actRoute:ActivatedRoute,private service:ServiceService, private router:Router) {}
  courses_taken_by_staff = [];
  staffs_department =[]
  staffsInfos =[]
  staff_email

  ngOnInit(){
    let actRoute = this.actRoute.paramMap.subscribe(res=>{
     let email = res.get('email');
     this.staff_email =email;
     this.service.logStaff({email}).subscribe(res=>{
       this.staffsInfos.push(res);
       this.courses_taken_by_staff = this.staffsInfos[0].coursesId;
       this.staffs_department = this.staffsInfos[0].departmentId
       
     })     
    })
  }
  openDialog(){
    const bottomsheetRef = this._bottomSheet.open(SetExaminationComponent)
  }
  viewDepartment(){
    this.router.navigate([`/panel/${this.staff_email}/profile`])
  }
}
