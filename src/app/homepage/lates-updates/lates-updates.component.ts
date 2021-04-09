import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lates-updates',
  templateUrl: './lates-updates.component.html',
  styleUrls: ['./lates-updates.component.css']
})
export class LatesUpdatesComponent {

    updates = [
        {  imageUrl: "https://static.amai.tv/screens/1614285326cb8c4da8895033d51ee48a8c2404556853138aef_min.jpg?w=70&q=70&fit=crop-center", name: 'Выдающиеся звери', episode: 'Серия 7 из 12 (2 Сезон)' },
        {  imageUrl: "https://static.amai.tv/screens/16142684458e59d4ec8b0b280b00152885b5618a7c169c4728_min.jpg?w=70&q=70&fit=crop-center", name: 'Магическая битвa', episode: 'Серия 19 из 24' },
        {  imageUrl: "https://static.amai.tv/screens/1614298900674bc5212ce48ec260ff99ad9c22fef3a5ded608_min.jpg?w=70&q=70&fit=crop-center", name: 'Ясяхимэ: Принцесса-полудемон', episode: 'Серия 20 из 24 ' },
        {  imageUrl: "https://static.amai.tv/screens/16141985762cd11c559b5a513179d473cfa1349a3279352b8f_min.jpg?w=70&q=70&fit=crop-center", name: 'Скейт: Бесконечность', episode: 'Серия 18 из 24'},
        {  imageUrl: "https://static.amai.tv/screens/161592447472ab8d0e035df11eac10c6099e464d4f9a697e1b_min.jpg?w=70&q=70&fit=crop-center", name: 'O моем  перерождении в слизь', episode: 'Серия 1 из 12'},
        {  imageUrl: "https://static.amai.tv/screens/1615847887f36a507c01dc7a851c6f1291684c54cd70d378e6_min.jpg?w=70&q=70&fit=crop-center", name: 'Волшебник-воин Орфен', episode: 'Серия 12 из 12'},
        {  imageUrl: "https://static.amai.tv/screens/16157616340649646a07c308980e4d5b5a86c08afb3231a10b_min.jpg?w=70&q=70&fit=crop-center", name: 'Путь назад', episode: 'Серия 15 из 24'}



    ];
}
