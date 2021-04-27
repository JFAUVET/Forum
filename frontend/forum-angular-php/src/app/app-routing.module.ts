import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { TestComponent } from './test/test.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'topics/:id', component: TopicsComponent},
  {path: 'posts/:id', component: PostsComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}