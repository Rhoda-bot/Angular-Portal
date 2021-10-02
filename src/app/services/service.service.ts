import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  // sending department as a data to the backend
  postDeptment(data:any){
    return this.http.post("http://localhost:4500/departmentalpost",data)
  }
  //getting all departments back from the backend
  getDepartment(){
    return this.http.get("http://localhost:4500/departmentalpost");
  }
  // sending courses as a data to the backend
  postCourses(data){
    return this.http.post("http://localhost:4500/courses",data);
  }
  // getting courses departments from the backend
  getCourses(){
    return this.http.get("http://localhost:4500/courses");
  }
  // sending staffs  info's to the backend 
  postStaffs(data:any){
    return this.http.post("http://localhost:4500/create-staffs",data)
  }
  // getting staffs details from the backend 
  getStaffs(){
    return this.http.get("http://localhost:4500/allstaffs");
  }
  logStaff(data:any){
    return this.http.post("http://localhost:4500/staff-log",data)
  }
  geVerifiedtStaffDetails(){
    return this.http.get("http://localhost:4500/staff-details")
  }
  setQuestions(data:any){
    return this.http.post("http://localhost:4500/setquestions",data)
  }
  getQuestions(){
    return this.http.get("http://localhost:4500/getAllQuestions")
  }
}
  