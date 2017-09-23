/**
 * Films
 * A Film resource is a single film.
 *
 * @export
 * @class FilmsModel
 */
export class FilmsModel {
    public title: string; //The title of this film
    public episode_id: number; //The episode number of this film.
    public opening_crawl: string; //The opening paragraphs at the beginning of this film.
    public director: string; //The name of the director of this film.
    public producer: string; //The name(s) of the producer(s) of this film. Comma separated.
    public release_date: Date; //The ISO 8601 date format of film release at original creator country.
    public species: Array<string>; //An array of species resource URLs that are in this film.
    public starships: Array<string>; //An array of starship resource URLs that are in this film.
    public vehicles: Array<string>; //An array of vehicle resource URLs that are in this film.
    public characters: Array<string>; //An array of people resource URLs that are in this film.
    public planets: Array<string>; //An array of planet resource URLs that are in this film.
    public url: string; //the hypermedia URL of this resource.
    public created: string; //the ISO 8601 date format of the time that this resource was created.
    public edited: string; //the ISO 8601 date format of the time that this resource was edited.
}
