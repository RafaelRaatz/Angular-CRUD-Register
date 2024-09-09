import { Component } from '@angular/core';
import { RequestService, Request } from '@services/index';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  title = 'Pedidos de Abertura de empresa';
  companies: Request[] = [];
  selectedCompany: Request | null = null;

  constructor(private companyService: RequestService, private titleService: Title) {
    this.setTitle('Home');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  async fetchCompanies(): Promise<void> {
    try {
      this.companies = await this.companyService.getCompaniesRequests();
    } catch (error) {
      console.error('Erro ao buscar empresas', error);
    }
  }

  showDetails(company: Request): void {
    this.selectedCompany = company;
  }

  closeDetails(): void {
    this.selectedCompany = null;
  }
}
