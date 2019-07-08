import { Component, OnInit } from '@angular/core';
import { FdupService } from '../shared/fdup.service';
import { Food } from '../shared/food.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city = 'Kolkata';
  constructor(private upfdservice: FdupService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    console.log('hello');
    this.upfdservice.getFood().subscribe(
      res => {
        this.upfdservice.foods = res as Food[];
      }
    );
  }
}
