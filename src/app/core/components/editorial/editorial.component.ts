import { Component, OnInit } from '@angular/core';
import {EditorialListCardService} from '../../services/editorial-list-card.service';
import {Editorial} from '../../objects/editorial';
import {EditorialListService} from '../../services/editorial-list.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  editorialListCards: Editorial[] = [];

  constructor(
    private editorialListService: EditorialListService
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
