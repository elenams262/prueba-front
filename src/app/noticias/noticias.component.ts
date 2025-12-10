import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor, *ngIf, DatePipe
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../models/noticias.model';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent implements OnInit {
  // Inyección del servicio
  private noticiasService = inject(NoticiasService);

  // Array para almacenar las noticias
  listaNoticias: Noticia[] = [];

  ngOnInit(): void {
    // Cargar las noticias al iniciar el componente
    this.listaNoticias = this.noticiasService.getNoticias();
  }
}
