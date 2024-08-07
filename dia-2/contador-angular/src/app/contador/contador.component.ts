import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

export class ContadorComponent implements OnInit, DoCheck {
  //Os valores e eventos ficaram aqui.
  //Eles serão citados no HTML, bem parecido com o Vue
  contador: number = 0;

  ngOnInit(): void {
    console.log('Inicializado');
  }

  ngDoCheck(): void {
    console.log('Verificado');
  }

  adicionar() {
    this.contador += 1;
  }

  diminuir() {
    this.contador -= 1;
  }

  resetar() {
    this.contador = 0;
  }
}
