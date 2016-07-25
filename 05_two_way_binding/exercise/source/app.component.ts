import {Component} from '@angular/core';
import {JSONP_PROVIDERS, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app',
  template: `
    <h1>AJAX App</h1>
    <pre>{{weather | json}}</pre>
    <input (input)="location = $event.target.value" [value]="location" />

    <input [(ngModel)]="location" />

    <button (click)="getWeather(location)" >Click for {{location}}</button>
  `,
  providers: [JSONP_PROVIDERS]
})
export class AppComponent {
  weather:any
  jsonp: Jsonp
  location: string
  constructor(jsonp: Jsonp) {
    this.location = 'Peru';
    this.weather = {}
    this.jsonp = jsonp
  }
  setLocation(evt) {
    this.location = evt.target.value
  }
  getWeather(location) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    var vm = this
    this.jsonp.request(url)
      .map(res => res.json())
      .subscribe((weather) => {
        this.weather = weather
        vm.weather = weather
      })
  }
  afterInit() {
    this.getWeather()
  }
}
