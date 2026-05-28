import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})

export class Ejercicio2 {

  nombre = '';
  nota1 = 0;
  nota2 = 0;
  nota3 = 0;

  resultado: any;

  constructor(private http: HttpClient) {}

  procesarEstudiante() {

    const estudiante = {

      nombre: this.nombre,
      nota1: this.nota1,
      nota2: this.nota2,
      nota3: this.nota3

    };

    const suma =
      estudiante.nota1 +
      estudiante.nota2 +
      estudiante.nota3;

  
    const promedio = suma / 3;

   
    let estado = '';

    if (promedio >= 13) {
      estado = 'Aprobado';
    } else {
      estado = 'Desaprobado';
    }

    let observacion = '';

    if (promedio >= 17) {
      observacion = 'Excelente';
    } else if (promedio >= 13) {
      observacion = 'Regular';
    } else {
      observacion = 'En riesgo';
    }

    
    this.resultado = {

      ...estudiante,
      suma: suma,
      promedio: promedio,
      estado: estado,
      observacion: observacion

    };

    console.log(this.resultado);

  }

  limpiarFormulario() {

    this.nombre = '';
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;

    this.resultado = null;

  }

}