import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("https://ionic3-example.herokuapp.com").subscribe(data => {
      alert(data["message"]);
    }, err => {
      console.log(err);
    });
  }

}
