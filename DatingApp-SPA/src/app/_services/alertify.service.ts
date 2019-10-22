import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any , cancelCallback: () => any) {

    alertify.confirm('Confirm Messgae', message , (e: any) => {
        okCallback();
      } , (): any => {
        cancelCallback();
      }).set({transition: 'zoom', message: 'Transition effect: zoom'}).show();
  }

  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }
}
