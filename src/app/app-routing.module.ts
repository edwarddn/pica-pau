import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'farmaceutico', component: FarmaceuticoComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'produto', component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
