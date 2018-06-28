import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combineUrl'
})
export class CombineUrlPipe implements PipeTransform {

  transform(value: string, url?: string): any {
    return url + '/' + value;
  }
}
