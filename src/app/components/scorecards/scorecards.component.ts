import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../../services/Tournament/Tournament.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.css'],
  providers: [TournamentService]
})
export class ScorecardsComponent implements OnInit {

  public details;
  public urlPath;

  constructor(private activatedRoute: ActivatedRoute,
    private tournamentService: TournamentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getTournamentDetails();
    });
  }

  private getTournamentDetails() {
    const year = this.activatedRoute.snapshot.params['year'];
    const gameType = this.activatedRoute.snapshot.params['gameType'];

    this.tournamentService.getTournamentData(year, gameType).subscribe(
      res => {
        this.details = res;
        const url = 'https://www.crichq.com/plugins/base?width=900&height=2040&border=1#clubs/'
          + this.details.clubId + '/matches/results';

        this.urlPath = url;
      });
  }


}
