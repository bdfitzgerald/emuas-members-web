import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Categories } from "./categories/categories.component";
import { Category } from "./category/category.component";
import { Post } from "./post/post.component";

const routes: Routes = [
  {
    path: '',
    component: Categories
  },
  {
    path: ':category',
    component: Category,
  },
  {
    path: ':category/:post',
    component: Post
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
