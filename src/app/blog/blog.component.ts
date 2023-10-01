import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];

  page: number = 1;
  tag!: null;
  category!: null;
  querySub: any;

  constructor(private postData: PostService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.querySub = this.route.queryParams.subscribe(params => {

      if (params['tag']) {
        this.tag = params['tag'];
        this.category;
      } else {
        this.tag;
      }

      if (params['category']) {
        this.category = params['category'];
        this.tag;
      } else {
        this.category;
      }

      this.getPage(+params['page'] || 1);
    });

  }

  getPage(num: number) {
    this.postData.getPosts(num, this.tag, this.category).subscribe(data => {
      if (data.length > 0) {
        this.blogPosts = data;
        this.page = num;
        // Extra Challenge
        window.scrollTo(0, 0);
      }
    });
  }



  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

}