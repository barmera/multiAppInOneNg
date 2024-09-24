import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinform: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userS: UserService
  ) {}
  ngOnInit(): void {
    let tmpData = localStorage.getItem('isUserLoggedIn');
    if (tmpData) {
      this.router.navigate(['/todolist']);
    }

    this.initForm();
  }

  initForm() {
    this.signinform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async submit() {
    if (this.signinform.invalid) {
      alert('Please enter correct details');
      return;
    }

    if (this.signinform.valid) {
      console.log(this.signinform.value);
      let tmpdata: any = localStorage.getItem('user-details');
      let userDetails = JSON.parse(tmpdata);

      if (
        userDetails.email == this.signinform.value.email &&
        userDetails.password == this.signinform.value.password
      ) {
        localStorage.setItem('isUserLoggedIn', 'true');
        this.router.navigate(['/todolist']);
      } else {
        this.signinform.reset();
        alert('invalid details');
      }
    }
  }
}
