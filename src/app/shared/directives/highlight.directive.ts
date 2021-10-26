import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

const HIGHLIGHTER_CLASS = 'highlighter';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef<any>, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover( eventData: Event) {
    this.renderer.addClass(this.elementRef.nativeElement, HIGHLIGHTER_CLASS);
  }

  @HostListener('mouseleave') mouseout( eventData: Event) {
    this.renderer.removeClass(this.elementRef.nativeElement, HIGHLIGHTER_CLASS);
  }

}
