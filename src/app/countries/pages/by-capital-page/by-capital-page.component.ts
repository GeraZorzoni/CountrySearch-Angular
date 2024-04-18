import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountryService) {}

  searchByCapital(term: string): void {
    // .subscribe() sirve escuchar al observable del servicio, si no se ingresa no retorna info

    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
