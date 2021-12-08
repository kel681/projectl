import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  faPlus = faPlus;
  faTimes = faTimes;
  @Input() post: PostModel;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  deletePost() {
    this.postService.deletePost(this.post.postId).subscribe({
      next: (v) => console.log('deleted post')
    })
  }
}




