import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { State } from './models/state.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private apiUrl =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(private http: HttpClient) {}

  async getStates(): Promise<any> {
    return await firstValueFrom(this.http.get<State[]>(this.apiUrl));
  }
}
