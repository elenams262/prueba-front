import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // Redirecciona la ruta raíz a la página de inicio
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  // Ruta para el contenido de inicio
  { path: 'inicio', component: HomeComponent },

  // Lazy loaded routes
  {
    path: 'noticias',
    loadComponent: () => import('./noticias/noticias.component').then((m) => m.NoticiasComponent),
  },
  {
    path: 'jornada',
    loadComponent: () => import('./jornada/jornada.component').then((m) => m.JornadaComponent),
  },
  {
    path: 'entrenamiento-extra',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./entrenamiento/entrenamiento/entrenamiento.component').then(
            (m) => m.EntrenamientoComponent
          ),
      },
      {
        path: 'fuerza',
        loadComponent: () =>
          import('./entrenamiento/fuerza/fuerza.component').then((m) => m.FuerzaComponent),
      },
      {
        path: 'velocidad',
        loadComponent: () =>
          import('./entrenamiento/velocidad/velocidad.component').then((m) => m.VelocidadComponent),
      },
      {
        path: 'resistencia',
        loadComponent: () =>
          import('./entrenamiento/resistencia/resistencia.component').then(
            (m) => m.ResistenciaComponent
          ),
      },
      {
        path: 'propiocepcion',
        loadComponent: () =>
          import('./entrenamiento/propiocepcion/propiocepcion.component').then(
            (m) => m.PropiocepcionComponent
          ),
      },
    ],
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'merchandising',
    loadComponent: () =>
      import('./merchandising/merchandising.component').then((m) => m.MerchandisingComponent),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.component').then((m) => m.CarritoComponent),
  },
  {
    path: 'clasificacion',
    loadComponent: () =>
      import('./clasificacion/clasificacion.component').then((m) => m.ClasificacionComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
  },
];
