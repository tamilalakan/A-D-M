import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

	title = "Home";
	map!: mapboxgl.Map;
	style = 'mapbox://styles/mapbox/streets-v11';
	lat = 37.75;
	lng = -122.41;
  constructor(private titleService:Title) {

   }

  ngOnInit(): void {
  	this.titleService.setTitle(this.title);
  	(mapboxgl as any).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  	this.titleService.setTitle(this.title);

  }
  }
