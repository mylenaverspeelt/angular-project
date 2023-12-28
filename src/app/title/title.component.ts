import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: string = "valor do proprio componente"

  //indica que essa propriedade vem do componenete pai
  @Input() titleProps: string = ""

  constructor() {

   }

  ngOnInit(): void {
  }

}
