import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  maxdate;
  ngOnInit() {
    this.maxdate = new Date();
    this.maxdate.setFullYear(this.maxdate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
