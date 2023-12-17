import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    // Lógica de navegación
    this.isMenuOpen = false; // Cierra el menú después de la navegación
  }

  constructor(private router: Router) { }
    navigateToHome(): void {
        this.router.navigate(['/']);
    }

    navigateToInscripcion(): void {
        // Aquí iría la lógica para navegar a la página de inscripción, por ejemplo
    }
    // Método para navegar a la página de contacto
  navigateToContacto() {
    this.router.navigate(['/contacto']);
  }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier lógica del componente
  }

}
