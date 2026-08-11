import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-page',
  standalone: false,
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent {

  // Figure out how to set this correctly
  book1: Book = {
  id: "1",
  title: "Jessie to the Land of Flowers",
  series: "Jessie's Journeys",
  details: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat
   In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus 
   nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent 
   taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
  cost: "$4.99",
  category: "Children's Chapter Book",
  releaseDate: new Date("2026-08-11"),
  inventory: 5,
  printToOrderLink: "Johnnieh.me",
  pages: 200,
  image: null
 }

 book2: Book = {
  id: "2",
  title: "Jessie And the Two Kings",
  series: "Jessie's Journeys",
  details: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat
   In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus 
   nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent 
   taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
  cost: null,
  category: "Children's Chapter Book",
  releaseDate: null,
  inventory: null,
  printToOrderLink: null,
  pages: null,
  image: null
 }
 
}
