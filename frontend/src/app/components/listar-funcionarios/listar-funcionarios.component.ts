import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: any;
  funcionarioAtual = null;
  currentIndex = -1;
  nome = '';

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.atualizarFuncionarios();
  }

  atualizarFuncionarios() {
    this.funcionarioService.getAll()
      .subscribe(
        data => {
          this.funcionarios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.atualizarFuncionarios();
    this.funcionarioAtual = null;
    this.currentIndex = -1;
  }

  atualizarFuncionarioAtivo(funcionario, index) {
    this.funcionarioAtual = funcionario;
    this.currentIndex = index;
  }

  buscarNome() {
    this.funcionarioService.findByName(this.nome)
      .subscribe(
        data => {
          this.funcionarios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
