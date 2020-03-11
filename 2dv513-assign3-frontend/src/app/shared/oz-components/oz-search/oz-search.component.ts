import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'oz-search',
  templateUrl: './oz-search.component.html',
  styleUrls: ['./oz-search.component.css'],
  animations: [
    trigger('toggleHeight', [
      state('false', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden',
        // display: 'none'
      })),
      state('true', style({
        height: '*',
        opacity: '1',
        // display: 'block'
      })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ],
})
export class OzSearchComponent {
  value = '';
  @Output() changed = new EventEmitter<string>();
  @Output() closed = new EventEmitter<boolean>();

  // tslint:disable-next-line:variable-name
  _visible = false;

  get visible() {
    return this._visible;
  }

  @Input()
  set visible(value: any) {
    this._visible = value;
  }

  onChange(event) {
    this.changed.emit(event.target.value);
  }

  onClose() {
    this.value = '';
    this.closed.emit();
  }
}


