import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})


export class PostDataComponent implements OnInit {

  post: BlogPost = new BlogPost;
  querySub: any;
  commentName?: string;
  commentText?: string;
  
  constructor(private data: PostService, private route: ActivatedRoute) { }

  submitComment() {
    var newComment = {
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    };
    this.post.comments?.push(newComment);
    this.data.updatePostById(this.post._id, this.post).subscribe(
      updatedData => {
        this.commentName = "";
        this.commentText = "";
      }
    );
  }
  
  ngOnInit() {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
        this.post.views++;
        this.data.updatePostById(this.post._id, this.post).subscribe();
      })
    })
  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

}