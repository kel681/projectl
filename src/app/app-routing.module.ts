import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent,

  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }