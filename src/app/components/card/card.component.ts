import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '@services/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() company!: Request;
  @Output() detailsRequested: EventEmitter<Request> = new EventEmitter();

  showDetails(company: Request): void {
    this.detailsRequested.emit(company);
  }
}
