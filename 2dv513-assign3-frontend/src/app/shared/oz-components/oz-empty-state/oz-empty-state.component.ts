import {Component, Input} from '@angular/core';

@Component({
  selector: 'oz-empty-state',
  templateUrl: './oz-empty-state.component.html',
  styleUrls: ['./oz-empty-state.component.css']
})
export class OzEmptyStateComponent {
  @Input() title: string;
  @Input() description: string;
}


