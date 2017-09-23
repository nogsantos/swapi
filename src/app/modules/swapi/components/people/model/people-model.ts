/**
 * People
 * A People resource is an individual person or character within the Star Wars universe.
 * @export
 * @class PeopleModel
 */
export class PeopleModel {
    public name: string; //The name of this person.
    public birth_year: string; // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
    public eye_color: string; //The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
    public gender: string; //The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
    public hair_color: string; //The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
    public height: string; //The height of the person in centimeters.
    public mass: string; //The mass of the person in kilograms.
    public skin_color: string; //The skin color of this person.
    public homeworld: string; //The URL of a planet resource, a planet that this person was born on or inhabits.
    public films: Array<string>; //An array of film resource URLs that this person has been in.
    public species: Array<string>; //An array of species resource URLs that this person belongs to.
    public starships: Array<string>; //An array of starship resource URLs that this person has piloted.
    public vehicles: Array<string>; //An array of vehicle resource URLs that this person has piloted.
    public url: string; //the hypermedia URL of this resource.
    public created: string; //the ISO 8601 date format of the time that this resource was created.
    public edited: string; //the ISO 8601 date format of the time that this resource was edited.
}
