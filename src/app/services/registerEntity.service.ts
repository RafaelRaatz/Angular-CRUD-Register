import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RegisterEntity } from './models/registerEntity.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterEntityService {
  private apiUrl = 'http://localhost:3000/entidade-registro';

  constructor(private http: HttpClient) {}

  async getRegisterEntity(): Promise<RegisterEntity[]> {
    return await firstValueFrom(this.http.get<RegisterEntity[]>(this.apiUrl));
  }
}
