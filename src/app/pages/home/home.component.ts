import { Component, computed, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { SearchLgComponent } from "./search-lg/search-lg.component";
import { DestinationCardComponent } from '../../shared/component/destination-card/destination-card.component';
import { HeadingsComponent } from '../../shared/component/headings/headings.component';
import { OfferCardComponent } from '../../shared/component/offer-card/offer-card.component';
import { NavbarService } from '../../shared/component/navbar/navbar.service';

type Destination = {
  place: string,
  path: string,
  amenities: string[]
}

type Offer = {
  path: string,
  category: string,
  title: string,
  info: string
}

@Component({
  selector: 'app-home',
  imports: [SearchLgComponent, DestinationCardComponent, HeadingsComponent, OfferCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  navService = inject(NavbarService);
  home = viewChild.required<ElementRef>("home");
  items: number[] = Array(10).map((_,idx) => idx+1)
  navHeight!:string;
  destinations: Destination[] = [
    {
      place: "Kerala, India",
      path: "/assets/Destination-images/destination-1.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Varanasi, UP",
      path: "/assets/Destination-images/destination-2.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Bangkok",
      path: "/assets/Destination-images/destination-3.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Malé, Maldives",
      path: "/assets/Destination-images/destination-4.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Paris, France",
      path: "/assets/Destination-images/destination-5.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Dubai, UAE",
      path: "/assets/Destination-images/destination-6.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "London, UK",
      path: "/assets/Destination-images/destination-7.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Bali, Indonasia",
      path: "/assets/Destination-images/destination-8.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
    {
      place: "Las Vegas",
      path: "/assets/Destination-images/destination-9.png",
      amenities: ["Flights", "Hotels", "Resorts"]
    },
  ]
  offers: Offer[] = [
    {
      path: "/assets/Offer-images/offer-1.png",
      category: "Domestic Flights",
      title: "Huge savings on flight with trxvl.",
      info: "Book domestic flights starting @ just ₹1459"
    },
    {
      path: "/assets/Offer-images/offer-2.png",
      category: "Domestic Flights",
      title: "Enjoy upto 20% off on International Hotels",
      info: "Book domestic flights starting @ just ₹1459"
    },
    {
      path: "/assets/Offer-images/offer-3.png",
      category: "Bank Offer",
      title: "Get upto 30% instant discount",
      info: "Book domestic flights starting @ just ₹1459"
    },
    {
      path: "/assets/Offer-images/offer-3.png",
      category: "Domestic Flights",
      title: "Huge savings on flight with trxvl.",
      info: "Book domestic flights starting @ just ₹1459"
    },
  ]

  ngOnInit(): void {
    this.navService.setBg("transparent")
    this.navService.height.subscribe((height) => {
      this.navHeight = height
    })
    this.home().nativeElement.style.paddingTop = `calc(100dvh - ${this.navHeight}px)`;
  }
}
