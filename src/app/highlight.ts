import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight implements OnInit {

  @Input() appHighlight: number = 0;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.appHighlight > 500) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
