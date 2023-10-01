import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

let perPage = 6;
const link = `https://aqueous-ridge-67369.herokuapp.com/api/`;
const max = Number.MAX_SAFE_INTEGER;

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page: any, tag: null, category: null): Observable<BlogPost[]> {
    let myLink = link + `posts?page=${page}+&perPage=${perPage}`;
    if (tag != null) {
      myLink = myLink + `&tag=${tag}`;
    }
    if (category != null) {
      myLink = myLink + `&category=${category}`;
    }
    return this.http.get<BlogPost[]>(myLink);
  }

  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(link + `posts?page=1&perPage=${max}`);
  }

  getPostbyId(id: string): Observable<BlogPost> {
    console.log("getting post by id: " + id);
    return this.http.get<BlogPost>(link + `posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(link + 'categories');
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(link + 'tags');
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(link + 'posts', data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(link + `posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(link + `posts/${id}`);
  }
}