import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';
import {EditorialListService} from "../../services/editorial-list.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  input: string;
  movies: Movie[] = [];

  constructor(
    private movieService: movieService;
  ) { }

  ngOnInit(): void {
    this.getEditorialListCards();
  }

  getEditorialListCards() {
    this.editorialListService.get6EditorialLastAdd().subscribe(res => {
      this.editorialListCards = res;
    });
  }

}
