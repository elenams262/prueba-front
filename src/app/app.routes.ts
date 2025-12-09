import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JornadaComponent } from './jornada/jornada.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';
import { MenuComponent } from './menu/menu.component';
import { FuerzaComponent } from './entrenamiento/fuerza/fuerza.component';
import { VelocidadComponent } from './entrenamiento/velocidad/velocidad.component';
import { ResistenciaComponent } from './entrenamiento/resistencia/resistencia.component';
import { PropiocepcionComponent } from './entrenamiento/propiocepcion/propiocepcion.component';

export const routes: Routes = [
  // Redirecciona la ruta raíz a la página de inicio
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  // Ruta para el contenido de inicio
  { path: 'inicio', component: HomeComponent },

  // La ruta que querías que funcionara:
  { path: 'noticias', component: NoticiasComponent },
  { path: 'jornada', component: JornadaComponent },
  {
    path: 'entrenamiento-extra',
    component: EntrenamientoComponent,
    children: [
      { path: 'fuerza', component: FuerzaComponent },
      { path: 'velocidad', component: VelocidadComponent },
      { path: 'resistencia', component: ResistenciaComponent },
      { path: 'propiocepcion', component: PropiocepcionComponent },
    ],
  },
  { path: 'menu', component: MenuComponent },
];
