import { Component, OnInit } from '@angular/core';
import {Post} from "../objects/post";

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  posts: Post []=[];
  constructor() { }

  ngOnInit(): void {
    this.posts.push(new Post(1,'Сверхъестественная манга «Shadows House» получает аниме-рекламу','Продюсерская компания Aniplex анонсировала телевизионную аниме-адаптацию манги Soumatou’s Shadows House в пятницу. Шестой том, который был отправлен в тот же…','https://static.nimedia.online/uploads/shadows.jpg',new Date('01-20-2020')))
    this.posts.push(new Post(2,'«Моя геройская академия» подтверждает предстоящий перерыв','«Моя геройская академия» стала непреодолимой силой в аниме-фандоме. Мало того, что шоу стало популярным сёнэн…','https://static.nimedia.online/uploads/heroacademy.jpg',new Date('09-19-2020')))
    this.posts.push(new Post(3,'Сверхъестественная манга «Shadows House» получает аниме-рекламу','Компания объявила, что первый совместный проект Netflix и Ubisoft — это анимационная адаптация серии игр Splinter Cell, выпущенной издателем игр.','https://static.nimedia.online/uploads/splinter_cell.jpg',new Date('11-06-2020')))
    this.posts.push(new Post(4,'У четвертого и последнего фильма Evangelion Rebuild наконец-то появилась дата выхода и новый красивый трейлер.','Самым популярным аниме в Японии на данный момент является Demon Slayer: Kimetsu no Yaiba,…','https://static.nimedia.online/uploads/i3835250777.jpg',new Date('10-24-2020')))
     }

}
