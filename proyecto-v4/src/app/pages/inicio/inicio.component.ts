import {AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import Navigation from 'swiper';
import Pagination from 'swiper';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit, AfterViewInit {

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
  navigateToTeoria(){
    this.router.navigate(['/teoria']);
  }
  navigateToPractica(){
    this.router.navigate(['/practica']);
  }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier lógica del componente
  }
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      // Opciones de Swiper...
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}