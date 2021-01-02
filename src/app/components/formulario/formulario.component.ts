import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data = [
    { name: 'carrito', description: 'Juego para niños', category: 'Juguete' },
    {
      name: 'muñeca',
      description: 'Juego para niños',
      category: 'Juguete de niña',
    },
    { name: 'zapato', description: 'Ropa', category: 'Calzado' },
  ];
  data2 = [...this.data];
  query = '';
  desactivado = true;
  search(titulo: string) {
    if (titulo == '') {
      this.data = this.data2;
    } else {
      this.data = this.data2.filter((element: any) =>
        element.name.includes(titulo.toLocaleLowerCase())
      );
    }
  }
}
