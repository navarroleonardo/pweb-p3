import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarFuncionarioComponent } from './components/adicionar-funcionario/adicionar-funcionario.component';
import { DetalhesFuncionarioComponent } from './components/detalhes-funcionario/detalhes-funcionario.component';
import { ListarFuncionariosComponent } from './components/listar-funcionarios/listar-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarFuncionarioComponent,
    DetalhesFuncionarioComponent,
    ListarFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
