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

        // return data.tournaments
        //   .filter((item) => item.year === year).map(detailByYearAndGameType => {
        //     return detailByYearAndGameType.tournaments
        //       .find((item) => item.type === gameType).details;
        //   });

        const detailByYear = data.tournaments
          .filter((item) => item.year === year);

        const detailByYearAndGameType = detailByYear[0].tournaments
          .filter((item) => item.type === gameType);

        return detailByYearAndGameType[0].details;
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
