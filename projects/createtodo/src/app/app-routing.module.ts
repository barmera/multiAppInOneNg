import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';

const routes: Routes = [
  { path: 'createtodo/createtask', component: CreatetaskComponent },
  {
    path: 'createtask',
    redirectTo: 'createtodo/createtask',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
