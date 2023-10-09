import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, parseISO } from "date-fns"

@Pipe({
  name: 'timeDistance'
})
export class TimeDistancePipe implements PipeTransform {

  transform(value: Date): string {
    try {
      return formatDistance(new Date(), value);
    } catch (error) {
      return formatDistance(new Date(), parseISO(value.toString()));
    }
  }
}
