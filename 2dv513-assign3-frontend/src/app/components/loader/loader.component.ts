import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from '../../shared/services/events.service';
import {fadeAnimation} from '../../shared/animations/fade-animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [fadeAnimation]
})
export class LoaderComponent implements OnInit, OnDestroy {
  visible = false;

  constructor(
      private eventsService: EventsService,
  ) {
  }

  getShowState() {
    return this.visible ? 'initial' : 'final';
  }

  ngOnInit(): void {
    this.registerShowEvent();
    this.registerHideEvent();
  }

  ngOnDestroy(): void {

  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  private registerShowEvent() {
    this.eventsService.registerEvent('LOADER-SHOW', this, () => {
      this.show();
    });
  }

  private registerHideEvent() {
    this.eventsService.registerEvent('LOADER-HIDE', this, () => {
      this.hide();
    });
  }
}


