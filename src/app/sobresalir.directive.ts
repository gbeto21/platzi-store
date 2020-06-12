import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSobresalir]'
})
export class SobresalirDirective {

  constructor(
    element: ElementRef
  ) { 
      element.nativeElement.style.backgroundColor ='red';
  }

}
