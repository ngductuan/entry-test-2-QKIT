import { Pipe, PipeTransform } from '@angular/core';

interface AddressI {
  addr1: string;
  city: string;
  state: string;
  zip: string;
  country?: string;
}

@Pipe({
  name: 'formatService',
})
export class FormatServicePipe implements PipeTransform {
  transform(addr: AddressI): string {
    return (
      addr.addr1 +
      ', ' +
      addr.city +
      ', ' +
      addr.state +
      ', ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }
}
