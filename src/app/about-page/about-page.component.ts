import { Component, inject } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    standalone: false
})
export class AboutPageComponent {
readonly globalService = inject(GlobalService);
readonly userDetails$ = this.globalService.userDetails$;
}
