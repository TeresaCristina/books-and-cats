import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost();
  tags!: string;

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;
    this.data.newPost(this.blogPost).subscribe(
      updatedData => {
        this.router.navigate(['/admin']);
      }
    );
  }

  constructor(private data: PostService, private router: Router) { }

  ngOnInit(){
  }

}
