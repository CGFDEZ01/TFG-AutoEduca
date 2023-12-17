import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoginModalOpen = false; // Estado para controlar la visibilidad del modal de inicio de sesión

  toggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    // Lógica de navegación
    this.isMenuOpen = false; // Cierra el menú después de la navegación
  }

  constructor(private router: Router) { }
    navigateToHome() {
        this.router.navigate(['/inicio']);
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
