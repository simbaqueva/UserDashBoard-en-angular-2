import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {
  public filter:any = 'all';
  public data:any = [];
  private products:any = [];
    constructor(private route: Router) {

    }

    getProducts(): Product[] {
        if(this.filter === 'all') {
            this.products = {
                'banlineaProducts': EVENTS.filter(product => product.entity === 'Banlinea'),
                'otherProducts': EVENTS.filter(product => product.entity !== 'Banlinea')
            };
        }else {
            this.products = {
                'banlineaProducts': EVENTS.filter(product => product.entity === 'Banlinea'),
                'otherProducts': EVENTS.filter(product => product.entity !== 'Banlinea')
            };
            this.products.banlineaProducts = this.products.banlineaProducts.filter((product:any) => product.product_type === this.filter);
            this.products.otherProducts = this.products.otherProducts.filter((product:any) => product.product_type === this.filter);

        }
        return this.products;
    }
  getStatus(status:any) {
    let products;
    if(status === 'all') {
      products = this.products;
    } else {
      products = {
        'banlineaProducts': this.products.banlineaProducts.filter((product:any) => product.status === status),
        'otherProducts': this.products.otherProducts.filter((product:any) => product.status === status)
      };
    }
    return products;

  }
    changeFilter(filter:any) {
        let products;
        if(status === 'all') {
            products = this.products;
        } else {
            products = {
            'banlineaProducts': this.products.banlineaProducts.filter((product:any) => product.status === status),
            'otherProducts': this.products.otherProducts.filter((product:any) => product.status === status)
            };
        }
        return products;
    }

    getEvent(id:any) {
        this.products = EVENTS.find(event => event.product_id === id);
        return this.products;
    }

    getFilter() {
        if( this.route.url.split('/')[2] === 'todos') {
            this.filter = 'all';
        } else {
             this.filter = this.route.url.split('/')[2];
        }
    }

    getLenght() {
        return EVENTS.length;
    }
}

const EVENTS = [
      {
          product_id: 1,
          date: {
              month: "ABR",
              acronym: "MIÉ",
              day: 3
          },
          product: "Cuenta de Ahorro Banlinea",
          product_type: "1",
          entity: "Banlinea",
          status: "Activo"
      },
      {
          product_id: 2,
          date: {
              month: "MAR",
              acronym: "VIE",
              day: 30
          },
          product: "Tarjeta de Crédito Banlinea",
          product_type: "5",
          entity: "Banlinea",
          status: "Activo"
      },
      {
          product_id: 3,
          date: {
              month: "MAR",
              acronym: "MAR",
              day: 18
          },
          product: "Inversión Banlinea",
          product_type: "3",
          entity: "Banlinea",
          status: "Aprobada"
      },
      {
          product_id: 4,
          date: {
              month: "FEB",
              acronym: "JUE",
              day: 28
          },
          product: "Cuenta de Ahorro Banlinea",
          product_type: "1",
          entity: "Banlinea",
          status: "Inactivo"
      },
      {
          product_id: 5,
          date: {
              month: "FEB",
              acronym: "SÁB",
              day: 10
          },
          product: "Cuenta de Ahorro Banlinea",
          product_type: "1",
          entity: "Banlinea",
          status: "Finalizado"
      },
      {
          product_id: 6,
          date: {
              month: "ABR",
              acronym: "LUN",
              day: 18
          },
          product: "Solicitud cuenta de ahorro",
          product_type: "1",
          entity: "Bancolombia",
          status: "Finalizado"
      },
      {
          product_id: 7,
          date: {
              month: "MAR",
              acronym: "MIÉ",
              day: 22
          },
          product: "Tarjeta de Crédito Entidad Financiera",
          product_type: "5",
          entity: "Fondo Nacional del Ahorro",
          status: "Aprobada"
      },
      {
          product_id: 8,
          date: {
              month: "FEB",
              acronym: "MAR",
              day: 15
          },
          product: "Seguro de Vehículo",
          product_type: "4",
          entity: "Seguros Bolivar",
          status: "Vencido"
      },
      {
          product_id: 9,
          date: {
              month: "ENE",
              acronym: "JUE",
              day: 20
          },
          product: "Seguro de Vida",
          product_type: "4",
          entity: "Seguros del Estado",
          status: "Aprobada"
      }
  ]
