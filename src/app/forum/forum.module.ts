import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { Categories } from './categories/categories.component';
import { ForumRoutingModule } from "./forum-routing.module";
import { Category } from './category/category.component';
import { CategoryItem } from './category-item/category-item.component';
import { PostItem } from './post-item/post-item.component';
import { Post } from './post/post.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule
  ],
  declarations: [
    Categories,
    Category,
    CategoryItem,
    PostItem,
    Post
  ]
})
export class ForumModule { }
