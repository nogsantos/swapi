import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-people-search',
    templateUrl: './people-search.component.html',
    styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {
    @Output() searchValue = new EventEmitter();
    termo: string;
    /**
     * Creates an instance of PeopleSearchComponent.
     * @memberof PeopleSearchComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof PeopleSearchComponent
     */
    ngOnInit() {
        this.termo = '';
    }
    /**
     * Serch by name
     *
     * @memberof PeopleGridComponent
     */
    doSearch(empty?: boolean): void {
        if (empty) {
            this.termo = '';
        }
        this.searchValue.emit(this.termo);
    }
}
