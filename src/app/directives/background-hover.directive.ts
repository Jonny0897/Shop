import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundHover]'
})
export class BackgroundHoverDirective implements OnInit {

  @Input() defaultBackground: string = '#80c5f7';
  @Input('appBackgroundHover') highlightColor: string = '#80c5f7';

  @HostBinding('style.backgroundColor') background: string = 'pink';

  constructor() {}

  ngOnInit() {
    this.background = this.defaultBackground;
  }

  @HostListener('mouseIn') mouseIn(){
    this.background = this.highlightColor;
  }

  @HostListener('mouseOut') mouseOut(){
    this.background = this.highlightColor;
  }

}
