import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { TableCompComponent } from './table-comp/table-comp.component';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TableCompComponent,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
