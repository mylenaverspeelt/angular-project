import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  //indica que essa propriedade vem do componenete pai
  @Input() titleProps: string = "valor inicial"

  constructor() {
    console.log("constructor / value: " + this.titleProps)
   }

  ngOnInit(): void {
    console.log("onInit / value: " + this.titleProps)
  
  }

  ngOnChanges(): void{
    console.log("onChanges / value: " + this.titleProps)
  }
}
