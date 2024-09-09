import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router) {}

  goToHome() {
    this.closeModal.emit();
    this.router.navigate(['/']);
  }
}
