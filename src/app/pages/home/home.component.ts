import { Component, inject, OnInit } from '@angular/core';
import { SearchLgComponent } from "./search-lg/search-lg.component";
import { DestinationCardComponent } from '../../shared/component/destination-card/destination-card.component';
import { NavbarService } from '../../shared/services/navbar.service';

type Destination = {
  place: string,
  path: string,
  amenities: string[]
}

@Component({
  selector: 'app-home',
  imports: [SearchLgComponent, DestinationCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  navService = inject(NavbarService);
  items: number[] = Array(10).map((_,idx) => idx+1)
  destinations: Destination[] = [
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dortmund",
      path: "/assets/youtube.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
  ]

  ngOnInit(): void {
    this.navService.setBg("transparent")
  }
}
