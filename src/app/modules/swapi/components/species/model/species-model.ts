/**
 * Species
 * A Species resource is a type of person or character within the Star Wars Universe.
 *
 * @export
 * @class SpeciesModel
 */
export class SpeciesModel {
    public name: string; // The name of this species.
    public classification: string; // The classification of this species, such as "mammal" or "reptile".
    public designation: string; // The designation of this species, such as "sentient".
    public average_height: string; // The average height of this species in centimeters.
    public average_lifespan: string; // The average lifespan of this species in years.
    public eye_colors: string; // A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
    public hair_colors: string; // A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
    public skin_colors: string; // A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
    public language: string; // The language commonly spoken by this species.
    public homeworld: string; // The URL of a planet resource, a planet that this species originates from.
    public people: Array<string>; // An array of People URL Resources that are a part of this species.
    public films: Array<string>; // An array of Film URL Resources that this species has appeared in.
    public url: string; // the hypermedia URL of this resource.
    public created: string; // the ISO 8601 date format of the time that this resource was created.
    public edited: string; // the ISO 8601 date format of the time that this resource was edited.
}
