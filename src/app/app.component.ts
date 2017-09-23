import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    current_year: string;
    /**
     * Creates an instance of AppComponent.
     * @memberof AppComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof AppComponent
     */
    ngOnInit() {
        this.current_year = `${new Date().getFullYear()}`;
    }

}
