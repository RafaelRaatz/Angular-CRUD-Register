import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'register',
    component: RegisterComponent, data: { title: 'Registro' }
  },
  { path: 'edit', component: EditComponent, data: { title: 'Editar' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
