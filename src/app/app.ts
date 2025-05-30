import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; // 👈 importa tu componente

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mi-proyecto-angular';
}
