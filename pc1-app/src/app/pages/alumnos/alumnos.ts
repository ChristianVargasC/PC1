import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
selector: 'app-alumnos',
standalone: true,
imports: [CommonModule],
templateUrl: './alumnos.html',
styleUrl: './alumnos.css'
})
export class AlumnosComponent {
alumnos = [
{
codigo: 'A001',
nombre: 'Juan Pérez',
curso: 'Desarrollo Web',
nota1: 15,
nota2: 18
}
];
calcularPromedio(nota1: number, nota2: number): number {
return (nota1 + nota2) / 2;
}
}