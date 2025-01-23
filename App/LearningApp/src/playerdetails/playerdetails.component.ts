import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../app/services/player.service';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-playerdetails',
  standalone: true,
  imports: [ButtonModule,TableModule,CommonModule,Dialog,InputTextModule,ReactiveFormsModule,RadioButtonModule],
  templateUrl: './playerdetails.component.html',
  styleUrl: './playerdetails.component.css'
})
export class PlayerdetailsComponent implements OnInit  {
  editProfileForm: FormGroup;
  constructor(private playerservice: PlayerService,private fb: FormBuilder) { 
    this.editProfileForm = this.fb.group({
      playerId:[''],
      playerName:[''],
      playerGender:[''],
      playerDateOfBirth:[''],
      playerRating:[''],
      playerStatus:['']
    })
  }
  ngOnInit(): void {
    this.playerservice.getData().subscribe((response) => {
      this.products = response;
      console.log(this.products);  // Print data in console
    });
  }
 
  products!: any[];
  event(data:any){
    console.log(data);
    this.visible = true;
    this.Binddata(data);
  }

  visible: boolean = false;

  Binddata(EditId: any){
    this.playerservice.getDataById(EditId).subscribe((data)=>{
      console.log("Res",data);
      this.editProfileForm.patchValue({
        playerId:data.playerId,
        playerName:data.playerName,
        playerGender:data.gender,
        playerDateOfBirth:data.dateofBirth,
        playerRating:data.rating,
        playerStatus:data.status
      })
      console.log(this.editProfileForm);      
    })
  }
}
