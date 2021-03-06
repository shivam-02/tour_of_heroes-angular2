import { NgModule }      from '@angular/core';
import { HeroSearchComponent } from "./hero-search.component";
import { HeroService } from "./hero.service";
import { HeroesComponent } from "./heroes.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from "./hero-detail.component";
import {RouterModule} from '@angular/router';


import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule } from "./app-routing.module";

import {HttpModule} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchService } from "./hero-search.service";
import './rxjs-extensions';





@NgModule({
  imports:      [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
 ],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent,HeroSearchComponent],
  bootstrap:    [ AppComponent ],
  providers:[HeroService],
  
})
export class AppModule { }
