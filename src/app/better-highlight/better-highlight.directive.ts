import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor = 'transparent';
// tslint:disable-next-line: no-input-rename
@Input('appBetterHighlight') setColor = 'blue';
@HostBinding('style.backgroundColor') bgColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.bgColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
  }
  @HostListener('mouseenter') mouseenter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
    this.bgColor = this.setColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
    this.bgColor = this.defaultColor;
  }

}
