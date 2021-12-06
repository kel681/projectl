import { Component, OnInit } from '@angular/core';
import { PostModel } from '@app/models/post.model';
import { Observable, of, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postSubscription: Subscription = null;
  posts: PostModel[] = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.refreshPost();
  }

  refreshPost(): void {
    this.postSubscription = this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => console.error(error)
    });
  }
}
