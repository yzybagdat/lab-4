import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(languages: string[], searchInput: string): any[]{
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return languages.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}
