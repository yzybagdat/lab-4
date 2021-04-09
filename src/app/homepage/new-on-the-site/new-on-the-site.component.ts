import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-on-the-site',
  templateUrl: './new-on-the-site.component.html',
  styleUrls: ['./new-on-the-site.component.css']
})
export class NewOnTheSiteComponent implements OnInit {

heading: string = "new on the site";
cards=[       {  imageUrl: 'https://static.amai.tv/uploads/candyboy.jpg?w=330&fit=crop-center&q=85', name: 'Candy boy', rating: '6.9/10' },
              {  imageUrl: 'https://static.amai.tv/uploads/OnePieceRomanceDawnStory.jpg?w=330&fit=crop-center&q=85', name: 'One Peace', rating: '6.2/10' },
              {  imageUrl: 'https://static.amai.tv/uploads/vassalord.jpg?w=330&fit=crop-center&q=85', name: 'Вассалорд', rating: '6.6/10' },
              {  imageUrl: 'https://static.amai.tv/uploads/ookami.jpg?w=330&fit=crop-center&q=85', name: 'Волчьи дети Амэ и Юки', rating: '9.6/10' },
              ];

   constructor() { }

   ngOnInit(): void {

   }

}


