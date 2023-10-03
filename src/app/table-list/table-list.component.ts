import {Component, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as countriesData from '../../assets/data/countries.json';
import * as booksWorld from '../../assets/data/booksWorld.json';

declare var apiBook: string;
declare var apiFlag: string;

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

export class TableListComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Country', 'Book', 'Author', 'Review'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: BookElement | null;
}

export interface BookElement {
  Country: string;
  Reviewers: string;
  Book: string;
  Author: string;
  Description: string;
  Review_One: string;
  Review_Two: string;
}

var sizeFlag = '.png" width="25%">';
var hover = '<img title="'; 
var src ='" src="';
var reviewInes = '<img title="Ines" src="../../assets/img/ines-cat.png" width="20%">';
var reviewTeresa = '<img title="Teresa" src="../../assets/img/teresa-cat.png" width="18%">';

var countries: any = countriesData;
var books: any = booksWorld;


const booksId = [
  "OL15611821W.json",
  "OL19980028W.json",
];

const ELEMENT_DATA: BookElement[] = [
  {
    Reviewers: reviewInes + reviewTeresa,
    Country:  hover + countries[0].name + src + apiFlag + countries[0].code + sizeFlag,
    Book:  books[0].title,
    Author: books[0].author,
    Description: apiBook + booksId[0],
    Review_One: books[0].review_one,
    Review_Two: books[0].review_two
  },
  {
    Reviewers: reviewInes + reviewTeresa,
    Country:  hover + countries[1].name + src + apiFlag + countries[1].code + sizeFlag,
    Book: books[1].title,
    Author: books[1].author,
    Description: apiBook + booksId[1],
    Review_One: books[1].review_one,
    Review_Two: books[1].review_two
  },  
];
