import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '@services/index';
import { formatCPF, formatDate } from '@helpers/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() selectedCompany!: Request;
  @Output() close: EventEmitter<Request> = new EventEmitter();

  formattedCPF: string = '';
  formattedDate: string = '';

  constructor(private router: Router) {}

  ngOnChanges(): void {
    this.formattedCPF = formatCPF(this.selectedCompany.solicitante.nu_cpf);
    this.formattedDate = formatDate(
      this.selectedCompany.solicitante.date_nascimento,
    );
  }

  goToEdit() {
    this.router.navigate(['/edit'], {
      queryParams: { id: this.selectedCompany.id },
    });
  }

  closeDetails(): void {
    this.close.emit();
  }
}
