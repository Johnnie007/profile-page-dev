import { inject, Service } from '@angular/core';
import { RestService } from '../rest-service/rest.service';
import { Book } from '../models/book';
import { map, Observable, tap } from 'rxjs';
import { Project } from '../models/projects';
import { UserDetails } from '../models/userDetails';

@Service()
export class GlobalService{
    private readonly restService = inject(RestService);
    private readonly clientData$ = this.restService.getClientDetails();

    readonly books$: Observable<Book[]> = this.clientData$.pipe(
        tap((x)=>{
            console.log(x)
        }),
        map(({ books }) => books)
    );
    readonly projects$: Observable<Project[]> = this.clientData$.pipe(
        map(({ projects }) => projects)
    );
    readonly userDetails$: Observable<UserDetails> = this.clientData$.pipe(
        map(({ userDetails }) => userDetails)
    );
    
    convertUrlString(text: string): string{
        if (!text) return '';
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-') 
        .replace(/^-+|-+$/g, '') 
    }

    getBooksById(id: string): Observable<Book | null>{
        return this.restService.getClientDetails().pipe(
            map(x => x.books.find(book => book.id === id) ?? null)
        );
    }

    validateBookDetailsRoute(seriesName: string, id: string): Observable<Book | undefined>{
         return this.restService.getClientDetails().pipe(
            map((x) =>  x.books.find(book => book.id === id && this.convertUrlString(book.title) == seriesName))
        );
    }

}
