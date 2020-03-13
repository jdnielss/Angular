import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-binding",
  template: `
    <div>
      <h2>{{ name }}</h2>
      // Manggil Method Javascript
      <h2>Js Method Length = {{ name.length }}</h2>
      <h2>Js Method toUpperCase = {{ name.toUpperCase() }}</h2>
      // Manggil Function
      <h2>Manggil Function = {{ greet() }}</h2>
    </div>
  `,
  styleUrls: ["./basic-binding.component.sass"]
})
export class BasicBindingComponent implements OnInit {
  public name = "Juan Daniel";
  constructor() {}

  greet() {
    return "Hello " + this.name;
  }

  ngOnInit(): void {}
}
