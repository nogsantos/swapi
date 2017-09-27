import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-form-loader',
    templateUrl: './form-loader.component.html'
})
export class FormLoaderComponent implements OnInit {
    @Input() loading;
    /**
     * Creates an instance of FormLoaderComponent.
     * @memberof FormLoaderComponent
     */
    constructor() { }
    /**
     *
     *
     * @memberof FormLoaderComponent
     */
    ngOnInit() {
        this.loading = true;
    }

}
