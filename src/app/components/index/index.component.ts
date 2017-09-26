import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of IndexComponent.
     * @memberof IndexComponent
     */
    constructor() {
        this.title = `Star Wars Api`;
    }
    /**
     * INIT
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
    }
}
