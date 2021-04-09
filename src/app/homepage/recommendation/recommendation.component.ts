import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  heading: string = "we recommend you to look";
  cards=[       {  imageUrl: 'https://static.amai.tv/uploads/mirai_1.jpg?w=330&fit=crop-center&q=85', name: 'Дневник будущего', rating: '8.9/10' },
    {  imageUrl: 'https://static.amai.tv/uploads/5nevest.jpg?w=330&fit=crop-center&q=85', name: 'Пять невест', rating: '8.6/10' },
    {  imageUrl: 'https://static.amai.tv/uploads/bakuman.jpg?w=330&fit=crop-center&q=85', name: 'Бакуман', rating: '9.2/10' },
    {  imageUrl: 'https://static.amai.tv/uploads/devil_1.jpg?w=330&fit=crop-center&q=85', name: 'Человек-дьявол: Плакса', rating: '9.8/10' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
