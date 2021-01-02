import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RamdomUserComponent } from './components/ramdom-user/ramdom-user.component';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormularioComponent,
    RamdomUserComponent,
    MiDirectivaDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
