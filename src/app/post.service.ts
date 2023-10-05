import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost'

let headers = new HttpHeaders();

headers.set('Access-Control-Allow-Origin', '**');
headers.set('Access-Control-Allow-Credentials', 'true');
headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
headers.set('Access-Control-Allow-Headers', 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control');
let perPage = 6;
const link = `https://aqueous-ridge-67369.herokuapp.com/api/`;
const max = Number.MAX_SAFE_INTEGER;

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getBooksDescription() {
    return this.http.get('https://openlibrary.org/works/OL15611821W.json'); 
}


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