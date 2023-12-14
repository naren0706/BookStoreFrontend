import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbar',
})
export class SearchbarPipe implements PipeTransform {
  transform(value: any, filterstr: string) {
    if (!value) {
      return [];
    }
    if (!filterstr) {
      return value;
    }
    filterstr = filterstr.toLocaleLowerCase();

    return value.filter((it: any) => {
      return (it.bookName + '' + it.bookAuthor)
        .toLocaleLowerCase()
        .includes(filterstr);
    });
  }
}
