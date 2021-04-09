import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { KataComponent } from './kata/kata.component';
import { KatasArmesComponent } from './katas-armes/katas-armes.component';
import { KatasSupComponent } from './katas-sup/katas-sup.component';
import { KhionComponent } from './khion/khion.component';
import { KumiteComponent } from './kumite/kumite.component';

import { StageComponent } from './stage/stage.component';


const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
 
  {path:'kata', component:KataComponent},
  {path:'khion', component:KhionComponent},
  {path:'kumite', component:KumiteComponent},
  {path:'stage', component:StageComponent},
  {path:'kata-sup', component:KatasSupComponent},
  {path:'kata-armes', component:KatasArmesComponent},
  {path:'',redirectTo: 'accueil', pathMatch:'full'},
  {path:'**', redirectTo:'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
