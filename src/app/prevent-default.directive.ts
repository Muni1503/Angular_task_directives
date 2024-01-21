import { Directive, HostBinding, HostListener,Input, OnChanges, SimpleChanges } from '@angular/core';

//
//component-to build reusable ui widgets
//directives-to build reusable ui behaviour
//pipe- to build reusable ui formatting 

@Directive({
  selector: '[appPreventDefault]',
  standalone: true
})
export class PreventDefaultDirective implements OnChanges {
 
  @Input() color ='lightgreen'
  constructor() { 
    
  }

  @HostBinding('style.background')bg=this.color;

  ngOnChanges(changes: SimpleChanges): void {
    this.bg=this.color;
  }
  @HostListener('click')//it will listen to the click event on a tag(a tag on which directive present)
  stopEvent(e:MouseEvent){
    e.stopPropagation();
    e.preventDefault();
  }

}
