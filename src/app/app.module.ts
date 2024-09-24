import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToDoSharedModule } from 'projects/createtodo/src/app/app.module';
import { ToDoListSharedModule } from 'projects/todolists/src/app/app.module';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SigupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateToDoSharedModule,
    ToDoListSharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
