import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(People: any[], searchTerm: string): any {
    if (!People || !searchTerm) {
      return People;
  }
  return People.filter(peopl => peopl.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

}
