import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { SetExaminationComponent } from 'src/app/staff/set-examination/set-examination.component';


@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  constructor(private service:ServiceService,private _bottomSheet:MatBottomSheet) { }
staff_dept;
staff_course
allQuestions = []
  ngOnInit(): void {
    this.service.geVerifiedtStaffDetails().subscribe(res=>{
      
      this.staff_dept =res[0].departmentId
      this.staff_course = res[0].coursesId
   
    })
    this.service.getQuestions().subscribe(res=>{
      this.allQuestions.push(res)
      console.log(this.allQuestions);
     })
  }
  openDialog(){
    const bottomsheetRef = this._bottomSheet.open(SetExaminationComponent)
  }

}
