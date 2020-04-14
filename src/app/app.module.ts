import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FilmsResolver } from './resolver/films.resolver';
import { FilmsService } from './service/films.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsComponent } from './component/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
  ],
  providers: [FilmsResolver, FilmsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
