import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FdupService {
  selectedFood: Food = {
    _id: '',
    title: '',
    desc: '',
    cost: null,
    count: null,
  };
  foods: Food[];
  BaseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get(this.BaseUrl + 'foods');
  }

  postFood(newFood: Food) {
    return this.http.post(this.BaseUrl + 'foods', newFood);
  }

  updateFood(food: Food) {
    return this.http.put(this.BaseUrl + 'foods/' + food._id, food);
  }

  deleteFood(foodId: string) {
    return this.http.delete(this.BaseUrl + 'foods/' + foodId);
  }
}
