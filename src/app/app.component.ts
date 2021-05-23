import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = '';
  readonly data = [
    "Fantastic Plastic Shoes",
    "Fantastic Steel Car",
    "Licensed Steel Gloves",
    "Rustic Wooden Hat",
    "Handmade Granite Chicken",
    "Generic Rubber Sausages",
    "Refined Granite Shoes",
    "Rustic Wooden Computer",
    "Licensed Rubber Chair",
    "Refined Granite Car"
  ]

  getData(): string[] {
    return !!this.value ? this.data.filter(name => name.toLowerCase().includes(this.value.toLowerCase())) : this.data;
  }
}
