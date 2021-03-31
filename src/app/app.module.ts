import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'profil', component: ProfilComponent},
      {path: 'formulaire', component: FormulaireComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
