import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
    title: string;
    subtitle: string;
    /**
     * Creates an instance of NotFoundComponent.
     * @memberof NotFoundComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NotFoundComponent
     */
    ngOnInit() {
        this.title = `404`;
        this.subtitle = `Conteúdo não localizado`;
    }

}
