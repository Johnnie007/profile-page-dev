import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { ClientData } from '../models/clientData';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Service()
export class RestService {
    private readonly http = inject(HttpClient);
    private readonly clientUrl = environment.clientUrl;

    private readonly clientData$ = this.http.get<ClientData>(this.clientUrl).pipe(
        tap(x =>{
            console.log(x)
        }),
        shareReplay({ bufferSize: 1, refCount: true })
    )

    getClientDetails(): Observable<ClientData>{
        return this.clientData$;
    }
}

