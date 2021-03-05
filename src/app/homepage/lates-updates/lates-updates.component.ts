import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lates-updates',
  templateUrl: './lates-updates.component.html',
  styleUrls: ['./lates-updates.component.css']
})
export class LatesUpdatesComponent {
      mydate =   [
            "2019-06-17 09:21:20+05:30",
            "2019-06-18 09:21:20+05:30",
            "2019-06-19 09:21:20+05:30",
            "2019-06-20 09:21:20+05:30"
          ];
    updates = [
        {  imageUrl: "https://static.amai.tv/screens/1614285326cb8c4da8895033d51ee48a8c2404556853138aef_min.jpg?w=70&q=70&fit=crop-center", name: 'Выдающиеся звери', episode: 'Серия 7 из 12 (2 Сезон)' },
        {  imageUrl: "https://static.amai.tv/screens/16142684458e59d4ec8b0b280b00152885b5618a7c169c4728_min.jpg?w=70&q=70&fit=crop-center", name: 'Магическая битвa', episode: 'Серия 19 из 24' },
        {  imageUrl: "https://static.amai.tv/screens/1614298900674bc5212ce48ec260ff99ad9c22fef3a5ded608_min.jpg?w=70&q=70&fit=crop-center", name: 'Ясяхимэ: Принцесса-полудемон', episode: 'Серия 20 из 24 ' },
        {  imageUrl: "https://static.amai.tv/screens/16141985762cd11c559b5a513179d473cfa1349a3279352b8f_min.jpg?w=70&q=70&fit=crop-center", name: 'Скейт: Бесконечность', episode: 'Серия 7 из 12' }
    ];
}
