import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-people-headline',
    templateUrl: './people-headline.component.html',
    styleUrls: ['./people-headline.component.scss']
})
export class PeopleHeadlineComponent implements OnInit {
    title: string;
    description: string;
    /**
     * Creates an instance of PeopleHeadlineComponent.
     * @memberof PeopleHeadlineComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof PeopleHeadlineComponent
     */
    ngOnInit() {
        this.title = `Personagens`;
        this.description = `A People resource is an individual person or character within the Star Wars universe.`;
    }

}
