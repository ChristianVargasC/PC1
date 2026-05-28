import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css'
})

export class Ejercicio3 {

  nombre = '';
  correo = '';
  peso = 0;
  altura = 0;

  resultado: any;

  errores = {
    nombre: '',
    correo: '',
    peso: '',
    altura: ''
  };

  procesarFormulario() {

    
    this.errores = {
      nombre: '',
      correo: '',
      peso: '',
      altura: ''
    };

    let valido = true;

    
    if (this.nombre.trim().length < 3) {

      this.errores.nombre =
        'El nombre debe tener mínimo 3 caracteres';

      valido = false;
    }

  
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.correo)) {

      this.errores.correo =
        'Ingrese un correo válido';

      valido = false;
    }

    if (this.peso < 10 || this.peso > 300) {

      this.errores.peso =
        'El peso debe estar entre 10 y 300 kg';

      valido = false;
    }

   
    if (this.altura < 0.5 || this.altura > 2.5) {

      this.errores.altura =
        'La altura debe estar entre 0.5 y 2.5 m';

      valido = false;
    }

   
    if (!valido) {

      this.resultado = null;
      return;

    }

   
    const imc =
      this.peso / (this.altura * this.altura);

   
    let categoria = '';

    if (imc < 18.5) {

      categoria = 'Bajo peso';

    } else if (imc >= 18.5 && imc <= 24.9) {

      categoria = 'Peso saludable';

    } else if (imc >= 25 && imc <= 29.9) {

      categoria = 'Sobrepeso';

    } else {

      categoria = 'Obesidad';

    }

   
    this.resultado = {

      nombre: this.nombre,
      correo: this.correo,
      peso: this.peso,
      altura: this.altura,

      imc: imc.toFixed(2),

      categoria: categoria

    };

  }

  limpiarFormulario() {

    this.nombre = '';
    this.correo = '';
    this.peso = 0;
    this.altura = 0;

    this.resultado = null;

    this.errores = {
      nombre: '',
      correo: '',
      peso: '',
      altura: ''
    };

  }

}