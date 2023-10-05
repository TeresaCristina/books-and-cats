import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HttpClient } from '@angular/common/http';

import * as countriesData from '../../../assets/data/countries.json';
import * as booksWorld from '../../../assets/data/booksWorld.json';

declare const apiBook: string;
declare const apiFlag: string;
declare const InesIcon: string;
declare const TeresaIcon: string;
declare var pawReview: any;

const ELEMENT_DATA: BookElement[] = [];
const countries: any = countriesData;
const books: any = booksWorld;


export interface BookElement {
  Book: string;
  ReviewBook: string;
  Episode: string;
  ReviewEpisode: string;
  Description: string;
  InesIcon: string;
  TeresaIcon: string;
  Review_One: string;
  Review_Two: string;
}
@Component({
  selector: 'app-table-list-poirot',
  templateUrl: './table-list-poirot.component.html',
  styleUrls: ['./table-list-poirot.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableListPoirotComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Book', 'ReviewBook', 'Episode', 'ReviewEpisode'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: BookElement | null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    for(let i = 0; i < 5; i++){
      var sizeFlag = '.png" width="25%">';
      var hover = '<img title="'; 
      var src ='" src="';

      ELEMENT_DATA[i] = {  
        'Book':  hover + countries[i].name + src + apiFlag + countries[i].code + sizeFlag,
        'ReviewBook': pawReview(i) ,
        'Episode': books[i].title,
        'ReviewEpisode': books[i].author,
        'Description': "",
        'TeresaIcon':"../../.." + TeresaIcon,  
        'InesIcon': "../../.." + InesIcon,
        'Review_One':books[i].review_one,
        'Review_Two': books[i].review_two
      };
      
      this.http.get(apiBook + books[i].bookID + '.json').subscribe( (data: any)=>{
        ELEMENT_DATA[i]['Description'] = data.description.value
      })
    }
  }

}
