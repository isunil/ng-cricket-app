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

