import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditComponent } from './pages/edit/edit.component';
import { AppComponent } from './app.component';

import {
  CardComponent,
  DetailsComponent,
  HeaderComponent,
  ButtonComponent,
  FormComponent,
  BoxComponent,
  ModalComponent,
} from '@components/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    CardComponent,
    DetailsComponent,
    HeaderComponent,
    ButtonComponent,
    FormComponent,
    BoxComponent,
    EditComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
