import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class RestServiceService {
    private http = inject(HttpClient)
  
}

