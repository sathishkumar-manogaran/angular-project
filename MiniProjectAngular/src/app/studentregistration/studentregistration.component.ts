import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    private studentList:Array<Student>=Array<Student>();
    mobileNumber:number;
    studentName:string;
    course:string
     
       addStudent(mobileNumber,studentName,course){

    var t = new Student(mobileNumber,studentName,course)
     this.studentList.push(t);
     console.log(this.studentList);
     this.mobileNumber=0;
     this.studentName='';
     this.course=''
  }

  updatestudent(studentNumber,studentName)
  {
    console.log('update called'+studentNumber+studentName);
  }
  removeStudent(student)
  {

    	let index=this.studentList.indexOf(student);

    	this.studentList.splice(index,1);

    }
  editstudent(student)
  {
    	let index=this.studentList.indexOf(student);
    
     let t=	this.studentList[index];

      this.mobileNumber=t.mobileNumber;
     this.studentName=t.studentName;
    	this.course=t.course
    }




}
export class Student{

   mobileNumber:number;
   studentName:string;
  course  :string
    constructor(mobileNumber,studentName,course){
      this.mobileNumber=mobileNumber;
      this.studentName=studentName;
      this.course=course;
    }
}