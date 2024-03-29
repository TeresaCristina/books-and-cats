import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {MatDividerModule} from '@angular/material/divider';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterPostsComponent } from './footer/footer-posts/footer-posts.component';
import { PostComponent } from './post/post.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { PostDataComponent } from './post-data/post-data.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PagingComponent } from './paging/paging.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { PostsTableComponent } from './admin/posts-table/posts-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListsComponent } from './lists/lists.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListComponent } from './lists/table-list/table-list.component';
import { TableListPoirotComponent } from './lists/table-list-poirot/table-list-poirot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterPostsComponent,
    PostComponent,
    SearchWidgetComponent,
    PostDataComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    HomeComponent,
    BlogComponent,
    PostCardComponent,
    PagingComponent,
    EditPostComponent,
    NewPostComponent,
    PostsTableComponent,
    PageNotFoundComponent,
    AboutComponent,
    ListsComponent,
    TableListComponent,
    TableListPoirotComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    NgFor, 
    NgIf,		
		HttpClientModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
