import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allRestaurant: Restaurant[] = [];
 
  constructor(private Restaurantervice: RestaurantsService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.Restaurantervice.get().subscribe((data) => {
      this.allRestaurant = data;
    });
  }
}


