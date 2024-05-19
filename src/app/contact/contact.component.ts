import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PlzService} from "../plz.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading = false;
  cities: any[] = [];
  plz: string ="";

  constructor(private plzService: PlzService) {}

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      alert('Die Nachricht wurde erfolgreich versendet!');
    }, 1000);
  }

  getCity(){

    this.plzService.getCity(this.plz).pipe().subscribe((data: any) => {
      this.cities = data;
      console.log(data[0].name);
    });
  }


}

