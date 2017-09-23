import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-people-search',
    templateUrl: './people-search.component.html',
    styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {
    @Output() searchValue = new EventEmitter();
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
    }
    /**
     * Serch by name
     *
     * @memberof PeopleGridComponent
     */
    doSearch(value: string): void {
        this.searchValue.emit(value);
    }
}
