import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Project } from '../models/projects';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { Book, BookSeries } from '../models/book';

@Service()
export class RestService {
    private readonly http = inject(HttpClient);
    private readonly projectsUrl = 'assets/public/projects.json';
    private readonly booksUrl = 'assets/public/books.json';

    private readonly books$ = this.http.get<BookSeries>(this.booksUrl).pipe(
        tap(series => console.log('Loaded books Array', series)),
        shareReplay({ bufferSize: 1, refCount: true })
    );

    private readonly projects$ = this.http.get<Project[]>(this.projectsUrl).pipe(
        tap(series => console.log('Loaded Projects Array', series)),
        shareReplay({ bufferSize: 1, refCount: true })
    );

    getProjects(): Observable<Project[]> {
        return this.projects$;
    }

    getBooks(): Observable<BookSeries> {
        return this.books$;
    }

    getBookById(id: string): Observable<Book | undefined> {
        return this.books$.pipe(
            map(series => series.books.find(book => book.id === id))
        );
    }
}

