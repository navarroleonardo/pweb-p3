import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarFuncionariosComponent } from './components/listar-funcionarios/listar-funcionarios.component';
import { DetalhesFuncionarioComponent } from './components/detalhes-funcionario/detalhes-funcionario.component';
import { AdicionarFuncionarioComponent } from './components/adicionar-funcionario/adicionar-funcionario.component';

const routes: Routes = [
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
  { path: 'funcionarios', component: ListarFuncionariosComponent },
  { path: 'funcionarios/:id', component: DetalhesFuncionarioComponent },
  { path: 'adicionar', component: AdicionarFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
