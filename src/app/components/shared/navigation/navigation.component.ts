import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TournamentService } from "../../../services/Tournament/Tournament.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  encapsulation: ViewEncapsulation.None,
  providers: [TournamentService]
})
export class NavigationComponent implements OnDestroy {
  public isCollapsed: Boolean = true;
  private subscription: Subscription;
  public years = [];
  public selectedYear = "";
  public tourDetails = [];

  constructor(
    private router: Router,
    private tournamentService: TournamentService
  ) {
    this.subscription = this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
    this.getTournamentYears();
    this.getTournamentDetailsByYear(this.selectedYear);
  }

  onSelect(year: string): void {
    this.selectedYear = year;
    this.getTournamentDetailsByYear(this.selectedYear);
  }

  private getTournamentDetailsByYear(year: string) {
    this.tournamentService.getTournamentDataByYear(year).subscribe(res => {
      this.tourDetails = (res || ["16"]).map(function(i) {
        return {
          urlFragment: `${year}/${i}`,
          label: `T${i}-${year}`,
          type: `T${i}`
        };
      });
    });
  }

  private getTournamentYears() {
    this.tournamentService.getTournamentYears().subscribe(res => {
      this.years = res || [new Date().getFullYear()];
      this.selectedYear = this.years[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
