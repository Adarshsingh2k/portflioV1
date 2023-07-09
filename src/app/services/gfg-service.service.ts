import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GfgServiceService {

  username='adarshsingh2k'
  constructor(private http:HttpClient) { }

  public getGfgData(){
    return this.http.get(`https://gfgunofficial-api.onrender.com/${this.username}`)
  }

}
