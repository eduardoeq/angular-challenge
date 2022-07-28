import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pet } from 'src/app/interfaces/pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  petRoute = '/pet';
  findByStatusRoute = '/pet/findByStatus';

  list: Pet[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getListByStatus = async (status: string): Promise<Pet[]> => {
    const url = `${environment.apiUrl}${this.findByStatusRoute}?status=${status}`;

    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const result$ = this.httpClient.get<Pet[]>(url, { headers: headers });
    return await firstValueFrom(result$) ?? Promise.resolve();
  }

  createPet = async (pet: Pet): Promise<Pet> => {
    const url = `${environment.apiUrl}${this.petRoute}`;

    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const result$ = this.httpClient.post<Pet>(url, pet, { headers: headers });
    return await firstValueFrom(result$) ?? Promise.resolve();
  }
}
