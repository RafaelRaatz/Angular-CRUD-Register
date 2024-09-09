import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  title = 'Solicitar Abertura de empresa | Vox Digital';

  id: string = '';

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.setTitle('Registro');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    // Captura os query params
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id); // Saída: 123
    });
  }
}
