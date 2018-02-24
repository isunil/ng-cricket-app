import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../../services/Tournament/Tournament.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-grounds',
  templateUrl: './grounds.component.html',
  styleUrls: ['./grounds.component.css'],
  providers: [TournamentService]
})
export class GroundsComponent implements OnInit {

  public details;
  public urlPath;

  constructor(private activatedRoute: ActivatedRoute,
    private tournamentService: TournamentService) { }

  ngOnInit() {
  }

}
