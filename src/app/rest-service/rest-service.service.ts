import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Project } from '../models/projects';
import { Observable } from 'rxjs';
import { BookSeries } from '../models/book';

@Service()
export class RestServiceService {
    private http = inject(HttpClient)
    private projectsUrl="public/books.json";
    private booksUrl="public/projects.json";
    
    getProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(this.projectsUrl);
    }

    getBooks(): Observable<BookSeries[]>{
        return this.http.get<BookSeries[]>(this.booksUrl);
    }
}

