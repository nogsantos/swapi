import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-planets-headline',
    templateUrl: './planets-headline.component.html',
    styleUrls: ['./planets-headline.component.scss']
})
export class PlanetsHeadlineComponent implements OnInit {
    title: string;
    description: string;
    /**
     * Creates an instance of PlanetsHeadlineComponent.
     * @memberof PlanetsHeadlineComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof PlanetsHeadlineComponent
     */
    ngOnInit() {
        this.title = `Planetas`;
        this.description = `A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.`;
    }

}
