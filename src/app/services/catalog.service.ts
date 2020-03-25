import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryContract } from '../contracts/category-contract';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient) {
  }

  public fetchCategories(): Observable<CategoryContract[]> {

    return this.http.get<CategoryContract[]>(
      'http://infernal.azurewebsites.net/api/Catalog/FetchCategories');
  }
}
