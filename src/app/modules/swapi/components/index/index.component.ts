import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    /**
     * Creates an instance of IndexComponent.
     * @memberof IndexComponent
     */
    constructor(private router: Router) { }
    /**
     * Init
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
    }

}
