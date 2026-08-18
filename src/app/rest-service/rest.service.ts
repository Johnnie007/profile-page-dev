import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Project } from '../models/projects';
import { Observable } from 'rxjs';
import { BookSeries } from '../models/book';

@Service()
export class RestService {
    private readonly http = inject(HttpClient);
    private readonly projectsUrl="assets/public/projects.json";
    private readonly booksUrl="assets/public/books.json";
    
    getProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(this.projectsUrl);
    }

    getBooks(): Observable<BookSeries>{
        return this.http.get<BookSeries>(this.booksUrl);
    }
}

