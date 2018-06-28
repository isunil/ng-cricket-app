import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnDestroy {
  public isCollapsed: Boolean = true;
  private subscription: Subscription;
  public tour1 = '2018/16';
  public tour1Label = 'T16-2018';
  public tour2 = '2018/10';
  public tour2Label = 'T10-2018';


  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
