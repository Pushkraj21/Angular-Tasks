import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter',
})
export class ConverterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    
    return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
  }
}
