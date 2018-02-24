import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { PointsComponent } from './components/points/points.component';
import { LivescoresComponent } from './components/livescores/livescores.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { ScorecardsComponent } from './components/scorecards/scorecards.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { GroundsComponent } from './components/grounds/grounds.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'header',
        component: HeaderComponent,
    },
    {
        path: 'players/:year/:gameType',
        component: PlayersComponent,
    },
    {
        path: 'teams',
        component: TeamsComponent,
    },
    {
        path: 'livescores/:year/:gameType',
        component: LivescoresComponent,
    },
    {
        path: 'points/:year/:gameType',
        component: PointsComponent,
    },
    {
        path: 'rounds/:year/:gameType',
        component: RoundsComponent,
    },
    {
        path: 'scorecards/:year/:gameType',
        component: ScorecardsComponent,
    },
    {
        path: 'statistics/:year/:gameType',
        component: StatisticsComponent,
    },
    {
        path: 'schedule/:year/:gameType',
        component: ScheduleComponent,
    },
    {
        path: 'grounds',
        component: GroundsComponent
    },
    {
        path: 'sponsors',
        component: SponsorsComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
