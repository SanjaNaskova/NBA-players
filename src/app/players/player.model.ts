export class Player {

    public id: number;
    public first_name: string;
    public last_name: string;
    public position: string;
    public team: {
        abbreviation: string,
        city: string,
        conference: string,
        division: string,
        full_name: string,
        id: number,
        name: string,
    };
    public city: string;

    constructor(id: number, firstName: string, lastName: string, position: string, team: any, city: string) {

        this.id = id;
        this.first_name = firstName;
        this.last_name = lastName;
        this.position = position;
        this.team = team;
        this.city = city;
    }
}