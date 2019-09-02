import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarsRover } from 'src/app/_models/mars-rover/mars-rover.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverServiceService {

  private marsURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72';
  // private jsonURL = './assets/json/rover-data.json';

  constructor(private http: HttpClient) { }

  getMarsRoverData() {
    return this.http.get(this.marsURL).pipe(
      map((result: any) => new MarsRover(
        result.photos[0].id,
        result.photos[0].img_src,
        result.photos[0].earth_date
      ))
    );
  }
}
