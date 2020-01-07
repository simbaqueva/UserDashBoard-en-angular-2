import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {

  private date:any;

  private usuario = {
    nombre: 'Daniel',
    apellido: 'García'
  }

  constructor() { }

  ngOnInit() {
        let displayDate = new Date()
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let day_number = displayDate.getDate();
        let string_day = days[displayDate.getDay()];
        let month = months[displayDate.getMonth()];
        let year = displayDate.getFullYear();
        this.date = {'day_number' : day_number, 'string_day' : string_day, 'month' : month, 'year' : year}
  }

}
