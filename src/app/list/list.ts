import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { Highlight } from '../highlight';
import { TitleCasePipe } from '../title-case-pipe';

@Component({
  selector: 'app-list',
  imports: [CommonModule, Highlight, TitleCasePipe],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  books: Book[] = [
    { title: 'the great gatsby', author: 'F. Scott Fitzgerald', price: 300, publishedDate: new Date('1925-04-10') },
    { title: 'to kill a mockingbird', author: 'Harper Lee', price: 600, publishedDate: new Date('1960-07-11') },
    { title: '1984', author: 'George Orwell', price: 450, publishedDate: new Date('1949-06-08') },
    { title: 'pride and prejudice', author: 'Jane Austen', price: 550, publishedDate: new Date('1813-01-28') },
    { title: 'the catcher in the rye', author: 'J.D. Salinger', price: 400, publishedDate: new Date('1951-07-16') }
  ];
}
