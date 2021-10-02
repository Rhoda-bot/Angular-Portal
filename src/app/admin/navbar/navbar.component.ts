import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
allDepartments =[]
department_length
allCourse =[]
course_length
allStaffs = []
staff_lentth
  constructor(private breakpointObserver: BreakpointObserver,private service:ServiceService) {}
  ngOnInit():void{
    let courses = this.service.getCourses().subscribe(res=>{
      this.allCourse.push(res);
      this.course_length = this.allCourse[0].length
    })
    let dept = this.service.getDepartment().subscribe(res=>{
      this.allDepartments.push(res);     
      this.department_length = this.allDepartments[0].length;
    })
    let staff = this.service.getStaffs().subscribe(res=>{
      this.allStaffs.push(res);
      console.log(this.allStaffs);
      this.staff_lentth = this.allStaffs[0].length
    })
  }

}
