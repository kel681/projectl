import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { Observable, of, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postSubscription: Subscription = null;
  posts: PostModel[] = null;

  faPlus = faPlus;
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

  addPost() {
    this.postSubscription = this.postService.createPost({ title: "test", content: "smol pp post" })
      .subscribe({
        next: (v) => this.refreshPost(),
        error: (e) => console.log("error occured when trying to add new post")
      })
  }
}
