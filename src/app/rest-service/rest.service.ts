import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Project } from '../models/projects';
import { Observable, shareReplay, tap } from 'rxjs';
import { BookSeries } from '../models/book';
import { environment } from '../../environments/environment';

@Service()
export class RestService {
    private readonly http = inject(HttpClient);
    private readonly projectsUrl = environment.projectsUrl;
    private readonly booksUrl = environment.booksUrl;

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
}

