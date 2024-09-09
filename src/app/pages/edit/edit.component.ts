import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '@services/index';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  id: string = '';
  companyRequest: any;

  constructor(
    private route: ActivatedRoute,
    private companyService: RequestService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];

      this.fetchCompanyRequestById(this.id);
    });
  }

  async fetchCompanyRequestById(id: string): Promise<void> {
    try {
      this.companyRequest = await this.companyService.getCompanyRequestById(id);
    } catch (error) {
      console.error('Erro ao buscar os pedidos', error);
    }
  }
}
