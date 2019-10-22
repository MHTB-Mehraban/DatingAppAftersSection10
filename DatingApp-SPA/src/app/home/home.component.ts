import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    registerMode = false;
    constructor(private http: HttpClient, private alertify: AlertifyService) { }

    ngOnInit() {
    }

    registerToggle() {
      this.registerMode = true;
    }

    cancelRegisterMode(registerMode: boolean) {
      this.registerMode = registerMode;
    }

    confirm() {
      this.alertify.confirm('This is Dating Application for tutorial purpose' , () => {
          this.alertify.message('Tank"s for your attention.');
    } , () => {
      this.alertify.warning('You pushed the cancell button.');
    });
  }
}
