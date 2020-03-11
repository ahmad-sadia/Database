import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { EventsService } from './shared/services/events.service';
import { AccountService } from './shared/services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  working = true;
  smallLayout = false;
  @ViewChild('snav', { static: false }) snav;

  constructor(
    public authService: AuthService,
    private eventsService: EventsService,
    private accountService: AccountService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.registerToggleEvent();
    this.registerBreakpointObserver();
  }

  ngOnDestroy(): void {

  }

  registerBreakpointObserver() {
    this.breakpointObserver
      .observe(['(min-width: 599.99px)'])
      .subscribe((state: BreakpointState) => {
        this.smallLayout = !state.matches;
      });
  }

  registerToggleEvent() {
    this.eventsService.registerEvent('NAVBAR-TOGGLE', 'AppComponent', () => {
      this.snav.toggle();
    });
  }

  navigate(url, extras?) {
    if (this.smallLayout) {
      this.snav.toggle();
    }
    if (extras) {
      this.router.navigate([url, extras]);
    } else {
      this.router.navigate([url]);
    }
  }

}
