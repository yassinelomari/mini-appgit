import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[appColor]'})
export class ColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  @Input() appColor;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    // console.log(event);
    if (this.el.nativeElement.id === 'id1') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
    if (this.el.nativeElement.id === 'id2') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.appColor);
    this.renderer.setStyle(this.el.nativeElement, 'border', 'black solid 2px ');
  }
}
