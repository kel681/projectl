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

  getPostByUsername(username: string) {
    return this.http.get<PostModel>(`${BASE_URI}/user/${username}`);
  }

  createPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(BASE_URI, post);
  }

  updatePost(post: PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(`${BASE_URI}/${post.postId}`, post);
  }

  deletePost(postId: String): Observable<PostModel> {
    return this.http.delete<PostModel>(`${BASE_URI}/${postId}`);
  }
}
