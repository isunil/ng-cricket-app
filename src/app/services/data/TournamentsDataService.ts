import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class TournamentsDataService {
  constructor() { }

  public getTournamentData(): Observable<string> {
    const data = {
      'tournaments': [
        {
          'year': '2017',
          'tournaments': [
            {
              'type': '16',
              'details': {
                'organizationId': '1091',
                'competitionId': '10685',
                'clubId': '216136',
                'drawId': '32545'
              }
            },
            {
              'type': '10',
              'details': {
                'organizationId': '1091',
                'competitionId': '11075',
                'clubId': '216136',
                'drawId': '33897'
              }
            }
          ]
        },
        {
          'year': '2018',
          'tournaments': [
            {
              'type': '16',
              'details': {
                'organizationId': '1091',
                'competitionId': '12135',
                'clubId': '216136',
                'drawId': '38518'
              }
            },
            {
              'type': '10',
              'details': {
                'organizationId': '1091',
                'competitionId': '12351',
                'clubId': '216136',
                'drawId': '39296'
              }
            }
          ]
        },
        {
          'year': '2019',
          'tournaments': [
            {
              'type': '16',
              'details': {
                'organizationId': '1091',
                'competitionId': '13048',
                'clubId': '216136',
                'drawId': '43582'
              }
            },
            {
              'type': '10',
              'details': {
                'organizationId': '1091',
                'competitionId': '13186',
                'clubId': '216136',
                'drawId': '44198'
              }
            }
          ]
        },
        {
          'year': '2021',
          'tournaments': [
            {
              'type': '16',
              'details': {
                'organizationId': '1091',
                'competitionId': '14353',
                'clubId': '216136',
                'drawId': '52098'
              }
            },
            {
              'type': '10',
              'details': {
                'organizationId': '1091',
                'competitionId': '14441',
                'clubId': '216136',
                'drawId': '52580'
              }
            }

          ]
        },
        {
          'year': '2022',
          'tournaments': [
            {
              'type': '16',
              'details': {
                'organizationId': '1091',
                'competitionId': '15062',
                'clubId': '216136',
                'drawId': '56710'
              }
            },
          ]
        }
      ]
    };
    return new Observable((observer) => {
      // observable execution
      observer.next(JSON.stringify(data));
      observer.complete();
    });
  }
}
