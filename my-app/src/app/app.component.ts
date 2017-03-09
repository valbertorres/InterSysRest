import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
 
})
export class AppComponent {
    private teste : boolean = false;

    t():void{
      this.teste = true;
    }
}
