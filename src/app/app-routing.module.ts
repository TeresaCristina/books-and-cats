import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsTableComponent } from './admin/posts-table/posts-table.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { ListsComponent } from './lists/lists.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent},
  { path: 'post/:id', component: PostComponent },
  { path: 'admin', component: PostsTableComponent },
  { path:'lists', component: ListsComponent},
  { path: 'admin/newPost', component: NewPostComponent},
  { path: 'admin/post/:id', component: EditPostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }