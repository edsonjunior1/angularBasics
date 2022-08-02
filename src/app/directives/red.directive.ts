import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = 'rgb(224, 94, 107)';
  }

}
