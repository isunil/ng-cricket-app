import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, HttpModule, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TournamentDetails } from '../../models/tournamentDetails';
import { TournamentsDataService } from '../data/TournamentsDataService';

@Injectable()
export class TournamentService {

  constructor(private http: Http, private httpModule: HttpModule, private tournamentData: TournamentsDataService) { }


  getTournamentData(year: string, gameType: string): Observable<TournamentDetails> {

    return this.tournamentData.getTournamentData().map(
      resp => {
        const data = JSON.parse(resp);
        const detailByYear = data.tournaments
          .filter((item) => item.year === year);

        const detailByYearAndGameType = detailByYear[0].tournaments
          .filter((item) => item.type === gameType);

        return detailByYearAndGameType[0].details;
      }
    );
  }

  getTournamentYears(): Observable<number[]> {

    return this.tournamentData.getTournamentData().map(
      resp => {
        const data = JSON.parse(resp);

        const allYears = data.tournaments
          .map((item: { year: string; }) => parseInt(item.year));

        return allYears.sort(function(a: number, b: number){return b-a});
      }
    );
  }

  getTournamentDataByYear(year: string): Observable<string[]> {

    return this.tournamentData.getTournamentData().map(
      resp => {
        const data = JSON.parse(resp);
        const detailByYear = data.tournaments
          .filter((item) => item.year === year.toString());

        const detailByYearAndGameType = detailByYear[0].tournaments
          .map((item) => item.type);
        return detailByYearAndGameType;;
      }
    );
  }

  getAllTournamentData(): Observable<TournamentDetails[]> {

    return this.tournamentData.getTournamentData().map(
      resp => {
        const data = JSON.parse(resp);
        const detailByYear = data.tournaments;
        return detailByYear;
      }
    );
  }

  // getTournamentData(year: string, gameType: string) {
  //   this.getData().subscribe(
  //     res => {
  //       const tournamentData = res;
  //       const detailByYear = tournamentData.tournaments
  //         .filter((item) => item.year === year);

  //       const detailByYearAndGameType = detailByYear[0].tournaments
  //         .filter((item) => item.type === gameType);

  //       return detailByYearAndGameType[0];
  //     });
  // }

  // getTournamentData(year: string, gameType: string): Observable<TournamentDetails> {

  //   //  return this.http.get('assets/tournamentData.json').map(
  //   return this.http.get('assets/tournamentData.json').map(
  //     resp => {
  //       const data = resp.json();
  //       const detailByYear = data.tournaments
  //         .filter((item) => item.year === year);

  //       const detailByYearAndGameType = detailByYear[0].tournaments
  //         .filter((item) => item.type === gameType);

  //       return detailByYearAndGameType[0].details;
  //     }
  //   );
  // }
}
