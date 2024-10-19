import { Component } from '@angular/core';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera App en Angular';

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer) { 
      this.matIconRegistry.addSvgIconResolver(
        (
          name: string,
          namespace: string
        ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
          switch (namespace) {
            case 'mat':
              return this.domSanitizer.bypassSecurityTrustResourceUrl(
                `assets/img/icons/material-design-icons/two-tone/${name}.svg`
              );
          }        
        }
      );
    }

  nombre: string = 'Batería';
  precio: number = 1200;

  nombreChanged: boolean = false;
  precioChanged: boolean = false;

  getArticuloInfo(): string {
    return `${this.nombre} - ${this.precio}`
  }

  cambiarPrecio(){
    this.precio = 250;
    this.precioChanged = true;
  }

  cambiarNombre() {
    this.nombre = 'Filtro de Aire';
    this.nombreChanged = true;
  }

  resetForm() {
    this.nombre = 'Batería';
    this.precio = 1200;
    this.nombreChanged = this.precioChanged = false;
  }
}
