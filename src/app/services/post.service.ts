import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

const BASE_URI = './api/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(BASE_URI);
  }

  getPost(postId: string) {
    return this.http.get<PostModel>(`${BASE_URI}/${postId}`);
  }

  createPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(BASE_URI, post);
  }

  updatePost(post: PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(`${BASE_URI}/${post.id}`, post);
  }

  deletePost(post: PostModel): void {
    this.http.delete<void>(`${BASE_URI}/${post.id}`);
  }

  mockPost(): Observable<PostModel[]> {
    const mockData = [
      {
        id: "1",
        title: "aTitle",
        content: "hello"
      },
      {
        id: "2",
        title: "aTitle",
        content: "hello"
      }
    ]
    return of(mockData);
  }

}
