import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class EditorialListCardService {
  private editorialListCards = [];

  constructor(private logger: LoggerService) {
    this.editorialListCards = [
      {
        name: 'MARVEL',
        title: 'Мстители',
        price: 4999,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'Темный Рыцарь',
        price: 7999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      },
      {
        name: 'MARVEL',
        title: 'Тор',
        price: 4599,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'Темный Рыцарь',
        price: 2999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      },
      {
        name: 'MARVEL',
        title: 'Железный Человек',
        price: 3999,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'темный рыцарь',
        price: 2999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      }
    ];
  }

  getEditorialListCards() {
    this.logger.log('Getting editorial list cards.[EditorialListCardService]');
    return this.editorialListCards;
  }
}
