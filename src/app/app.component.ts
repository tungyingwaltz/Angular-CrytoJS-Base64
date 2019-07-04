import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  text1: string = "中正🐔場";
  text2: string;
  text3: string;
  text4: string;
  encrypt() {
    var words = CryptoJS.enc.Utf8.parse(this.text1);
    this.text2 = CryptoJS.enc.Base64.stringify(words);
  }
  decrypt() {
    var words = CryptoJS.enc.Base64.parse(this.text3);
    this.text4 = CryptoJS.enc.Utf8.stringify(words);
  }
}
