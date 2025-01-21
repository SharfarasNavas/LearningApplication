import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [Menubar,ButtonModule],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router) {}
  items: MenuItem[] | undefined;
  ngOnInit() {
    

    this.items = [
      {
        label: '1.Learning App - Player Details',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigate(['/playerdetails']);
        }
      }
    ];
}
}
