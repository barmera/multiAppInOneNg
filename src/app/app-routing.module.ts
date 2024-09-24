import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListSharedModule } from '../../projects/todolists/src/app/app.module';
import { CreateToDoSharedModule } from '../../projects/createtodo/src/app/app.module';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SigupComponent },
  {
    path: 'createtask',
    loadChildren: () =>
      import('../../projects/createtodo/src/app/app.module').then(
        (m) => m.CreateToDoSharedModule
      ),
  },
  {
    path: 'todolist',
    loadChildren: () =>
      import('../../projects/todolists/src/app/app.module').then(
        (m) => m.ToDoListSharedModule
      ),
  },
  { path: '**', redirectTo: 'todolist', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToDoListSharedModule.forRoot(),
    CreateToDoSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
