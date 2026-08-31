import { inject, Service } from '@angular/core';
import { RestService } from '../rest-service/rest.service';
import { Book } from '../models/book';
import { map, Observable } from 'rxjs';

@Service()
export class GlobalService{
    private readonly restService = inject(RestService);
    
    convertUrlString(text: string): string{
        if (!text) return '';
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-') 
        .replace(/^-+|-+$/g, ''); 
    }

    getBooksById(id: string): Observable<Book | null>{
        return this.restService.getBooks().pipe(
            map(series => series.books.find(book => book.id === id) ?? null)
        );
    }

    validateBookDetailsRoute(seriesName: string, id: string): Observable<Book | undefined>{
        console.log("we are here")
         return this.restService.getBooks().pipe(
            map((series) =>  series.books.find(book => book.id === id && this.convertUrlString(book.title) == seriesName))
        );
    }
}
