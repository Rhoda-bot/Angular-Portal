import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _fb:FormBuilder, private service:ServiceService, private router:Router) { }
  staffForm = this._fb.group({
    email:['',Validators.required]
  })
  ngOnInit(): void {
  }
  logStaff(){
    let values = this.staffForm.value;
    this.service.logStaff(values).subscribe(res=>{
     if (res['email']==values.email) {
       this.router.navigate([`/panel/${values.email}`])
       console.log("hello");  
     }else{
       console.log("unsuccessful");
       
     }
    })
  }
}
