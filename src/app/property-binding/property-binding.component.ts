import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-binding",
  template: `
    <div>
      <h2>Property Binding</h2>
      <span
        >================================================================</span
      >
      <br />
      <input type="text" value="Juan Daniel" [id]="myId" />
    </div>
  `,
  styleUrls: ["./property-binding.component.sass"]
})
export class PropertyBindingComponent implements OnInit {
  public myId = "testId";
  constructor() {}

  ngOnInit(): void {}
}
