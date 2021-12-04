import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {
  funcionario = {
    nome: '',
    email: '',
    senha: '',
    documento: '',
    grupo: '',
    obs: '',
  };
  submitted = false;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
  }

  criarFuncionario() {
    const data = {
      nome: this.funcionario.nome,
      email: this.funcionario.email,
      senha: this.funcionario.senha,
      documento: this.funcionario.documento,
      grupo: this.funcionario.grupo,
      obs: this.funcionario.obs,
    };

    this.funcionarioService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  adicionarNovoFuncionario() {
    this.submitted = false;
    this.funcionario = {
      nome: '',
      email: '',
      senha: '',
      documento: '',
      grupo: '',
      obs: '',
    };
  }

}
