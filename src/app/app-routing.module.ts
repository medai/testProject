import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmsResolver } from './resolver/films.resolver';
import {FilmsComponent } from './component/films/films.component';


const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        path: '',
        component: FilmsComponent,
        resolve: {
          filmList: FilmsResolver,
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
