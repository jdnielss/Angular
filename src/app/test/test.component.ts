import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-test]",
  /*
    bisa pake . atau juga []
    Kalau pake . manggilnya pake class="app-test"
    kalau pake [] manggilnya langsung ajalah -> <div app-test></div>
  */
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.sass"]
  /*
    templateUrl bisa Inline kek gini
      template: `<div> </div>`
      styleUrls juga bisa Inline, pake Backtip 
  */
})
export class TestComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
