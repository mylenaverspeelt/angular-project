import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  quantidade: number = 0;

  constructor() {
    console.log("construtor");
  } 

  ngOnInit(): void {
    console.log('onInit: Executado durante a inicialização do componente.');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck: Executado durante cada detecção de mudanças no componente.');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Executado após o conteúdo do componente ser inicializado.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Executado após cada verificação de conteúdo no componente.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Executado após a inicialização da visualização do componente.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Executado após cada verificação da visualização do componente.');
  }

  incrementar() {
    this.quantidade += 1
  }

  decrementar() {
    this.quantidade -= 1
  }

}
