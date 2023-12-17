import { Component} from '@angular/core';
import { Router } from '@angular/router';
import 'swiper/css/bundle';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
  styleUrl: './teoria.component.scss'
})
export class TeoriaComponent{
  
  onCarnetChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    // Implementa lo que debería suceder cuando cambia el tipo de carnet
  }
  
  onInfoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    // Implementa lo que debería suceder cuando cambia el tipo de información
  }
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    // Lógica de navegación
    this.isMenuOpen = false; // Cierra el menú después de la navegación
  }

  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
  navigateToTeoria(){
    this.router.navigate(['/teoria']);
  }
  navigateToPractica(){
    this.router.navigate(['/practica']);
  }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier lógica del componente
  }  
}
