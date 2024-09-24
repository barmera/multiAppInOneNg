import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
})
export class CreatetaskComponent {
  createTaskForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userS: UserService
  ) {}

  ngOnInit(): void {
    let tmpData = localStorage.getItem('isUserLoggedIn');
    if (!tmpData) {
      this.router.navigate(['/todolist']);
    }

    this.initForm();
  }

  initForm() {
    this.createTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      duedate: ['', Validators.required],
      attachment: [''],
    });
  }

  async submit() {
    console.log(this.createTaskForm.value);
    if (this.createTaskForm.invalid) {
      alert('Please fill all details');
      return;
    }

    if (this.createTaskForm.valid) {
      let tmpData: any = localStorage.getItem('tasklist');
      let taskArr: any[] = JSON.parse(tmpData);

      console.log(tmpData);

      if (tmpData !== null) {
        if (taskArr.length > 0) {
          taskArr.push(this.createTaskForm.value);
          console.log(taskArr);
        }
      }
      return;
      await localStorage.setItem('tasklist', JSON.stringify(taskArr));

      this.router.navigate(['/todolist']);
    }
  }
}
