import { company, address } from 'faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: +address.latitude(),
      lng: +address.longitude(),
    };
  }

  markerContent(): string {
    return `
      <h1>${this.name}</h1>
      <h3>${this.catchPhrase}</h3>
    `;
  }
}
