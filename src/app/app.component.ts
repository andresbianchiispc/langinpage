import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Necesario para *ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Datos de actividades
  actividades = [
    { nombre: 'CrossFit', img: 'https://www.invictusgym.com.ar/images/crossfit.jpg' },
    { nombre: 'Funcional', img: 'https://i.imgur.com/O24sTka.jpeg' },
    { nombre: 'Musculación', img: 'https://i.imgur.com/Q7g7DTw.jpeg' },
    { nombre: 'Spinning', img: 'https://i.imgur.com/r5cn6bp.jpeg' },
    { nombre: 'Yoga', img: 'https://clubgymsierra.es/wp-content/uploads/2024/03/Gym-Sierra-104.jpg' },
    { nombre: 'Zumba', img: 'https://i.imgur.com/BQKVYEZ.jpeg' } // Imagen genérica
  ];

  // Datos de sedes
  sedes = [
    { nombre: 'Invictus 1', direccion: 'Duarte Quiros 2022', link: '#' },
    { nombre: 'Invictus 2', direccion: 'Duarte Quiros 2830', link: '#' },
    { nombre: 'Feel 1', direccion: 'Bv. San Juan 651', link: '#' },
    { nombre: 'Fuzion Fit', direccion: 'Montevideo 608', link: '#' }
  ];

  // Datos de planes
  planes = [
    { nombre: 'Mensual', precio: '$42.000', ahorro: '0%' },
    { nombre: 'Trimestral', precio: '$35.000 / mes', ahorro: 'Ahorrá 15%' },
    { nombre: 'Anual', precio: '$27.500 / mes', ahorro: 'Ahorrá 40%', destacado: true }
  ];

  // Horarios de ejemplo (Simplificado)
  horarios = [
    { hora: '07:00 - 23:00', actividad: 'Musculación (Lun-Vie)' },
    { hora: '10:00 - 13:00', actividad: 'Musculación (Sáb)' },
    { hora: '17:00 - 20:00', actividad: 'Musculación (Dom)' }
  ];
}