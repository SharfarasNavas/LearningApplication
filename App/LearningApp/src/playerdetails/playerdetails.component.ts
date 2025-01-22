import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../app/services/player.service';


@Component({
  selector: 'app-playerdetails',
  standalone: true,
  imports: [ButtonModule,TableModule,CommonModule],
  templateUrl: './playerdetails.component.html',
  styleUrl: './playerdetails.component.css'
})
export class PlayerdetailsComponent implements OnInit  {
  constructor(private playerservice: PlayerService) { }
  ngOnInit(): void {
    this.playerservice.getData().subscribe((response) => {
      this.products = response;
      console.log(this.products);  // Print data in console
    });
  }
 
  products!: any[];
}
