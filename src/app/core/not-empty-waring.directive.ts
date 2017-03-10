import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appNotEmptyWaring]'
})
export class NotEmptyWaringDirective {

  constructor(
    private renderer: Renderer,
    private el: ElementRef
  ){}

  @HostListener('click', ['$event']) onFocusout(target){
    console.log(target);
    console.log(target.target);
  }

}
