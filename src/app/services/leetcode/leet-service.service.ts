import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeetServiceService {

  username='lagbhagadarsh'
  constructor(private http:HttpClient) { }
  public getLeetcodeData(){
    return this.http.get(`https://easy-plum-dibbler-hem.cyclic.app/${this.username}`)
  }
}
