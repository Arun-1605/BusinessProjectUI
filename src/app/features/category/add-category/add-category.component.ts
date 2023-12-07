import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-business-category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model : AddCategoryRequest;

  constructor(private categoryService : CategoryService)
  {
    this.model =
    {
      name : ''
    }
  }

  onFormSubmit(){

    this.categoryService.addCategory(this.model)

  }

}
