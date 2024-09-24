import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  taskList: any[] = [];
  searchForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    let tmpData = localStorage.getItem('isUserLoggedIn');
    if (!tmpData) {
      this.router.navigate(['/signin']);
    }
    this.searchForm = this.fb.group({
      searchtxt: [''],
    });
    this.getTaskData();
  }

  searchTask(searchtxt: string) {
    let originalTaskList: any = [...this.taskList];

    this.taskList = this.taskList.filter((task) =>
      task.title.trim().toLowerCase().includes(searchtxt.trim().toLowerCase())
    );

    if (this.taskList.length === 0) this.taskList = [...originalTaskList];
  }

  getTaskData() {
    let tmpListData: any = localStorage.getItem('tasklist');
    this.taskList = JSON.parse(tmpListData);
  }

  deleteTask(id: number) {
    const index = this.taskList.findIndex((task) => task.taskid == id);
    if (index !== -1) {
      this.taskList.splice(index, 1);
      let tmpD = JSON.stringify(this.taskList);
      localStorage.setItem('tasklist', tmpD);
      this.getTaskData();
    }
  }

  createTask() {
    this.router.navigate(['/createtask']);
  }
}
