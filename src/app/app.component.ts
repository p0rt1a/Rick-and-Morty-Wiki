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
  private pageCount: number = 0;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getItems(this.url).subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }

  getByCharacterName(name: string) {
    this.postsService.getItems(this.url, name).subscribe((response) => {
      this.data = response;
    });
  }

  nextPage() {
    if (this.data.info.next != null) {
      var nextPageUrl = this.data.info.next;
      return this.postsService.getItems(nextPageUrl).subscribe((response) => {
        this.data = response;
      });
    } else {
      return 0;
    }
  }

  prevPage() {
    if (this.data.info.prev != null) {
      var prevPageUrl = this.data.info.prev;
      return this.postsService.getItems(prevPageUrl).subscribe((response) => {
        this.data = response;
      });
    } else {
      return 0;
    }
  }
}
