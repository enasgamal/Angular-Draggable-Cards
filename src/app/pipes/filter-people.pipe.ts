import { People } from './../models/people';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
// custom pipe to filter characters by its name and fill an array from type People and convert the search term
// and the stored name to lowercase to compare if they equal then return an array with matched name
 
export class FilterPeoplePipe implements PipeTransform{
  transform(People: any[], searchTerm: string): any {
    if (!People || !searchTerm) {
      return People;
  }
  return People.filter(peopl => peopl.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

}
