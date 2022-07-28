import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mateiral.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './layout/auth/auth.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';

import { HomeComponent } from './layout/home/home.component';
import { ListComponent } from './pets/list/list.component';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';

import { NavComponent } from './components/nav/nav.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthComponent,
    ListComponent,
    CreatePetComponent,
    PetCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
