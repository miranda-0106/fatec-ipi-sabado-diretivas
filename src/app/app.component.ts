import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  textoBotao = "Esconder/Exibir"
  esconder = false;

  alterarExibicao () {
    this.esconder = !this.esconder;
  }

  pessoas = [
    { nome: "José", idade: 18 },
    { nome: "Maria", idade: 22 },
    { nome: "João", idade: 17 }
  ]

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }

  cursos = [
    { nomeCurso: "ADS", periodo: "Noturno" },
    { nomeCurso: "Eventos", periodo: "Manhã" },
    { nomeCurso: "RH", periodo: "Tarde" }
  ]

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }

}
