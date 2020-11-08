import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent} from '../app/client/branch/branch.component'
import { SubjectsComponent } from './client/subjects/subjects.component';
import { QuestionsComponent } from './client/questions/questions.component';
import { PapersComponent } from './client/papers/papers.component';
import { NavComponent } from './client/nav/nav.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { FormComponent } from './client/form/form.component';
import { SigninComponent } from './client/signin/signin.component';
import { SignupComponent } from './client/signup/signup.component';
import { ProfileComponent } from '../app/client/profile/profile.component';
import { NotfoundComponent } from '../app/client/notfound/notfound.component';
import { HomeComponent } from '../app/client/home/home.component'

// auth guard import

import { AuthGuard } from '../app/auth/auth.guard';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"404",component:NotfoundComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'profile',component:ProfileComponent,canActivate:[ AuthGuard]},
  {path:'dashboard', component:NavComponent,children:[
    {path:'',component:DashboardComponent},
  ],canActivate:[ AuthGuard]},
  {path:'branch', component:NavComponent,children:[
    {path:'', component:BranchComponent},
    {path:'form',component:FormComponent}
  ],canActivate:[ AuthGuard]},
  {path:'subjects', component:NavComponent,children:[
    {path:'',component:SubjectsComponent},
  ],canActivate:[ AuthGuard]},
  {path:'questions', component:NavComponent,children:[
    {path:'',component:QuestionsComponent},
  ],canActivate:[ AuthGuard]},
  {path:'papers', component:NavComponent,children:[
    {path:'',component:PapersComponent},
  ],canActivate:[ AuthGuard]},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
