import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private url: string = 'https://rickandmortyapi.com/api/character';
  public data: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getItems(this.url).subscribe((response) => {
      this.data = response;
      console.log(this.data.results);
    });
  }
}
