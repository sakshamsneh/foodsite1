import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FdupService } from '../shared/fdup.service';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-upfd',
  templateUrl: './upfd.component.html',
  styleUrls: ['./upfd.component.css']
})
export class UpfdComponent implements OnInit {

  constructor(private upfdservice: FdupService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    this.upfdservice.getFood().subscribe(
      res => {
        this.upfdservice.foods = res as Food[];
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '') {
      this.upfdservice.postFood(form.value).subscribe(
        res => {
          this.getFood();
          form.reset();
        }
        );
      } else {
        this.upfdservice.updateFood(form.value).subscribe(
          res => {
            this.getFood();
            form.reset();
        }
      );
    }
  }

  fUpdate(food: Food) {
    this.upfdservice.selectedFood = food;
  }

  fDelete(foodId: string) {
    this.upfdservice.deleteFood(foodId).subscribe(
      res => {
        this.getFood();
      }
    );
  }
}
