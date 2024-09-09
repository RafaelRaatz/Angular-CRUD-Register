import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Request } from './models/request.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) { }

  async getCompaniesRequests(): Promise<Request[]> {
    return await firstValueFrom(this.http.get<Request[]>(this.apiUrl));
  }

  async getCompanyRequestById(id: string): Promise<Request[]> {
    return await firstValueFrom(
      this.http.get<Request[]>(`${this.apiUrl}/${id}`),
    );
  }

  async createCompanyRequest(companyRequest: Request): Promise<Request[]> {
    return await firstValueFrom(
      this.http.post<Request[]>(this.apiUrl, companyRequest),
    );
  }

  async updateCompanyRequest(
    companyRequest: Request,
    id: string,
  ): Promise<Request[]> {
    return await firstValueFrom(
      this.http.put<Request[]>(`${this.apiUrl}/${id}`, companyRequest),
    );
  }
}
