import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { PreventDefaultDirective } from './prevent-default.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, BoxComponent,PreventDefaultDirective,RouterLinkActive,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_Directives';
  showAlert(buttonName=''){
    alert("Hello"+" "+ buttonName)
  }

 
}
