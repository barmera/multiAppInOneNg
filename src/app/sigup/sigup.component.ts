import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
})
export class SigupComponent implements OnInit {
  signupform: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userS: UserService
  ) {}

  ngOnInit(): void {
    // this.userS.isUserLoggedIn.subscribe((data) => {
    //   if (data) {
    //     this.router.navigate(['/todolist']);
    //   }
    // });

    let tmpData = localStorage.getItem('isUserLoggedIn');
    // console.log(tmpData);

    if (tmpData) {
      this.router.navigate(['/todolist']);
    }

    this.initForm();
  }

  initForm() {
    this.signupform = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async submit() {
    // console.log(this.signupform.value);
    if (this.signupform.invalid) {
      alert('Please enter details');
      return;
    }

    if (this.signupform.valid) {
      await localStorage.setItem(
        'user-details',
        JSON.stringify(this.signupform.value)
      );

      this.router.navigate(['/signin']);
    }
  }
}
