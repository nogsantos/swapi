import { Component, OnInit } from '@angular/core';

import { AlertaService } from '../../services/alerta/alerta.service';

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
    constructor(
        private service: AlertaService
    ) {
        this.title = `Star Wars Api`;
    }
    /**
     * INIT
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
    }
    hello(): void {
        this.service.msgAlerta('Star Wars Api!');
    }

}
