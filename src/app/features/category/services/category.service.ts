import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-business-category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model:AddCategoryRequest) : Observable<void>{
    return this.http.post<void>('','')
  }
}
