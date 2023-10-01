import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost;
  tags!: string;

  formSubmit() {
    
    if (this.tags != null){
      this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    }

    this.data.updatePostById(this.blogPost._id, this.blogPost).subscribe(
      updatedData => {
        this.router.navigate(['/admin']);
      }
    );
  }

  deletePost() {
    this.data.deletePostById(this.blogPost._id).subscribe(
      () => this.router.navigate(['/admin'])
    );
  }

  constructor(private data: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.data.getPostbyId(this.route.snapshot.params['id']).subscribe(post => {
      this.blogPost = post;
      console.log(this.blogPost);
      this.tags = this.blogPost.tags.toString();
    });
  }

}