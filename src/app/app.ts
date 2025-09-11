import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first-component/first-component";

@Component({
  selector: 'app-root', //The custom HTML tag to represent this component
  // standalone: true, //Standalone components can be used without being declared in an NgModule
  imports: [FirstComponent], //Imports array is used to import other components, directives, and pipes that this component depends on.
  templateUrl: './app.html', //Path to the HTML file for this component's template
  styleUrl: './app.css' //Path to the CSS file for this component's styles
})
export class App {
  protected title = 'myAngularProject'; //A property to hold the title of the application. using interpolation to display it in the html file
  a = 10; // class member / property
  b = 27; // class member / property
  sum = this.a + this.b; // 'this' keyword is used to access the properties of the class.
  imageUrl: string = "/favicon.ico"; // property to hold image URL. The image will be displayed in the html file using property binding.
  counter: number = 0;

  // A method to display an alert with a given message. Example for event binding.
  display(message: string): void {
    alert(message);
  }

  increment(): void{
    this.counter++;
  }

  decrement(): void{
    this.counter--;
  }
}
