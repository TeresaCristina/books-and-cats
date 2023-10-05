import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HttpClient } from '@angular/common/http';

import * as countriesData from '../../../assets/data/countries.json';
import * as booksWorld from '../../../assets/data/booksWorld.json';
import * as pawReviews from '../../../assets/data/pawsReviews.json';


declare const apiBook: string;
declare const apiFlag: string;
declare const InesIcon: string;
declare const TeresaIcon: string;

const ELEMENT_DATA: BookElement[] = [];
const countries: any = countriesData;
const books: any = booksWorld;
const paw: any = pawReviews;

export interface BookElement {
  Country: string;
  Review: string;
  Book: string;
  Author: string;
  Description: string;
  InesIcon: string;
  TeresaIcon: string;
  Review_One: string;
  Review_Two: string;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableListComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Country', 'Book', 'Author', 'Review'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: BookElement | null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    for(let i = 0; i < 3; i++){
      var sizePaw = '"10%">';
      var sizeFlag = '.png" width="25%">';
      var hover = '<img title="'; 
      var src ='" src="';
      var pawReview =  '<img src="'  + paw[i].pawOne + '" width=' + sizePaw + 
      '<img src="'  + paw[i].pawTwo + '" width=' + sizePaw +
      '<img src="'  + paw[i].pawThree + '" width=' + sizePaw +
      '<img src="'  + paw[i].pawFour + '" width=' + sizePaw +
      '<img src="'  + paw[i].pawFive + '" width=' + sizePaw  

      ELEMENT_DATA[i] = {  
        'Country':  hover + countries[i].name + src + apiFlag + countries[i].code + sizeFlag,
        'Review': pawReview ,
        'Book': books[i].title,
        'Author': books[i].author,
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