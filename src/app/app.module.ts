import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Http, HttpModule } from '@angular/http';

import { TournamentsDataService } from '../app/services/data/TournamentsDataService';


import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { PointsComponent } from './components/points/points.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { ScorecardsComponent } from './components/scorecards/scorecards.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LivescoresComponent } from './components/livescores/livescores.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { GroundsComponent } from './components/grounds/grounds.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,
    HeaderComponent,
    NavigationComponent,
    PointsComponent,
    RoundsComponent,
    ScorecardsComponent,
    StatisticsComponent,
    LivescoresComponent,
    SafeUrlPipe,
    ScheduleComponent,
    GroundsComponent,
    SponsorsComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    routes,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    HttpModule
  ],
  providers: [TournamentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
