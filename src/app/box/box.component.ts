
import { Component,EventEmitter,Input,Output } from '@angular/core';
import { PreventDefaultDirective } from '../prevent-default.directive';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [PreventDefaultDirective],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
@Input() size="";
@Output() xyz=new EventEmitter();

triggerXyzEvent(buttonName: string){
  this.xyz.emit(buttonName);
}
}
