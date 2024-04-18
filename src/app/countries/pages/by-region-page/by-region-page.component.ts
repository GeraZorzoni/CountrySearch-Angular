import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountryService) {}

  searchByRegion(region: Region): void {
    this.selectedRegion = region;

    // .subscribe() sirve escuchar al observable del servicio, si no se ingresa no retorna info

    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
