import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {
  funcionarioAtual = null;
  mensagem = '';

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.mensagem = '';
    this.buscarFuncionario(this.route.snapshot.paramMap.get('id'));
  }

  buscarFuncionario(id) {
    this.funcionarioService.get(id)
      .subscribe(
        data => {
          this.funcionarioAtual = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  atualizarFuncionario() {
    this.funcionarioService.update(this.funcionarioAtual.id, this.funcionarioAtual)
      .subscribe(
        response => {
          console.log(response);
          this.mensagem = 'O funcionário foi atualizado com sucesso';
        },
        error => {
          console.log(error);
        });
  }

  deletarFuncionario() {
    this.funcionarioService.delete(this.funcionarioAtual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/funcionarios']);
        },
        error => {
          console.log(error);
        });
  }
}
