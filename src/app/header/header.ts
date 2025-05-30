import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // 👈 MUY IMPORTANTE para que sea usable sin módulo
  imports: [],       // ✅ Puedes dejarlo vacío si no necesitas otros componentes aquí
  templateUrl: './header.html',
  styleUrls: ['./header.css'] // 👈 Aquí hay un error: debe ser 'styleUrls' (con "s")
})
export class Header {}