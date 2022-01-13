import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Emp } from 'src/app/model/emp';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  name:string='';
  profilepic:string='';
  gender:string='';
  department:string[]=[];
  salary!: number;
  day:string='';
  month:string='';
  year:string='';
  notes:string='';


  startDate:any= this.year+'-'+this.month+'-'+this.day;

  departments=[ {id:'hr', name:'hr', value:'HR', select:false},
                {id:'sales', name:'sales', value:'Sales', select:false},
                {id:'finance', name:'finance', value:'Finance', select:false},
                {id:'engineer', name:'engineer', value:'Engineer', select:false},
                {id:'others', name:'others', value:'Others', select:false} ];


  
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

 
  addEmp(form:NgForm){

    const model= new Emp(form.value.name, form.value.profile,form.value.gender, this.department, form.value.Salary, form.value.Year+'-'+form.value.Month+'-'+form.value.Day);

    console.log(model);

    this.service.addEmployeee(model).subscribe(
                 data=>{console.log(data);
                 this.goToDashboard(); },
                error=>(console.log(error))
    );


    // console.log(form.value);
    // this.startDate=form.value.Day+'-'+form.value.Month;
    // console.log(this.startDate)
  }

  goToDashboard(){
    this.router.navigate(['/employees'])
  }
  onChangeDept($event:any){
    if($event.target.checked){
      this.department.push($event.target.value);
    }
  }
}
