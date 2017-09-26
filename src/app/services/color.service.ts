import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
    private colors = [
        `red`,
        `pink`,
        `purple`,
        `deep-purple`,
        `indigo`,
        `blue`,
        `light-blue`,
        `cyan`,
        `teal`,
        `green`,
        `light-green`,
        `lime`,
        `yellow`,
        `amber`,
        `orange`,
        `deep-orange`,
        `brown`,
        `grey`,
        `blue-grey`
    ];
    /**
     * Creates an instance of ColorService.
     * @memberof ColorService
     */
    constructor() { }
    /**
     * Cores disponíveis no sistema.
     *
     * @readonly
     * @type {Array<string>}
     * @memberOf Colors
     */
    get color(): Array<string> {
        return this.colors;
    }
    /**
     * Retorna a posição de uma cor aleatoriamente dentro da paleta de cores.
     *
     * @returns {number}
     *
     * @memberOf Colors
     */
    getRandomColor(): number {
        return Math.floor(Math.random() * this.colors.length);
    }

}
