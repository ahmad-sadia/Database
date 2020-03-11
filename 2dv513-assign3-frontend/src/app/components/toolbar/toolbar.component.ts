import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { EventsService } from '../../shared/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
  ) {

  }

  ngOnInit(): void {

  }

  navbarToggle() {
    this.eventsService.emit('NAVBAR-TOGGLE');
  }
}


