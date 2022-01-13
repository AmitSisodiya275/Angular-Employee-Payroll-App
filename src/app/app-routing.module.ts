import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path:'employees', component: DashboardComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path:'', redirectTo:'employees', pathMatch:'full'},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
