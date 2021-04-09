import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { KhionComponent } from './khion/khion.component';
import { KataComponent } from './kata/kata.component';
import { KumiteComponent } from './kumite/kumite.component';
import { StageComponent } from './stage/stage.component';
import { KatasArmesComponent } from './katas-armes/katas-armes.component';
import { KatasSupComponent } from './katas-sup/katas-sup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShotokanComponent } from './shotokan/shotokan.component';
import { AikiComponent } from './aiki/aiki.component';



@NgModule({
  declarations: [
    AppComponent,
   
    AccueilComponent,
    KhionComponent,
    KataComponent,
    KumiteComponent,
    StageComponent,
    KatasArmesComponent,
    KatasSupComponent,
    HeaderComponent,
    FooterComponent,
    ShotokanComponent,
    AikiComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
