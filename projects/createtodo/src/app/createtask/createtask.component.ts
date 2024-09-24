import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
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
      this.router.navigate(['/signin']);
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

      if (taskArr !== null && taskArr.length > 0) {
        let newTaskid = taskArr[taskArr.length - 1].taskid + 1;
        this.createTaskForm.addControl('taskid', new FormControl(newTaskid));
        taskArr.push(this.createTaskForm.value);
        let tmpD = JSON.stringify(taskArr);
        localStorage.setItem('tasklist', tmpD);
      } else {
        this.createTaskForm.addControl('taskid', new FormControl(1));
        taskArr = [this.createTaskForm.value];
        let tmpD = JSON.stringify(taskArr);
        localStorage.setItem('tasklist', tmpD);
      }

      this.router.navigate(['/todolist']);
    }
  }
}
