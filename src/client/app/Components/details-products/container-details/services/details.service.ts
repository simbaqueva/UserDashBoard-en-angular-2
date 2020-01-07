import { Injectable } from '@angular/core'

@Injectable()
export class DetailsService {
    getEvent(id:any) {
        return PRODUCTS.find(product => product.id === id );
    }
}

// Cuenta de Ahorros = 1 // Cuenta de Ahorro= 2 // Inversión = 3 // Seguros = 4 // Tarjetas de Credito = 5 //
const PRODUCTS=[{
        id: 1,
        type: 1,
        code : 452369874102,
        total_balance: 1000000,
        avaliable_balance: 800000,
        exchange_balance: 200000,
        movements: [
            {
            date: '2017/04/28',
            description: 'RETIRO CAJERO',
            office: 'SERVICIO',
                value: -60000
            },
            {
            date: '2017/04/20',
            description: 'PAGO NOMINA',
            office: 'CHICO 94',
                value: 1600000
            },
            {
            date: '2017/04/20',
            description: 'TRASLADO CTA BANCOL SUC VIRT',
            office: 'CHICO 94',
                value: -10000
            },
                    {
            date: '2017/04/28',
            description: 'RETIRO CAJERO',
            office: 'SERVICIO',
                value: -60000
            },
            {
            date: '2017/04/20',
            description: 'PAGO NOMINA',
            office: 'CHICO 94',
                value: 1600000
            },
            {
            date: '2017/04/20',
            description: 'TRASLADO CTA BANCOL SUC VIRT',
            office: 'CHICO 94',
                value: -10000
            },
                    {
            date: '2017/04/28',
            description: 'RETIRO CAJERO',
            office: 'SERVICIO',
                value: -60000
            },
            {
            date: '2017/04/20',
            description: 'PAGO NOMINA',
            office: 'CHICO 94',
                value: 1600000
            },
            {
            date: '2017/04/20',
            description: 'TRASLADO CTA BANCOL SUC VIRT',
            office: 'CHICO 94',
                value: -10000
            },
                    {
            date: '2017/04/28',
            description: 'RETIRO CAJERO',
            office: 'SERVICIO',
                value: -60000
            },
            {
            date: '2017/04/20',
            description: 'PAGO NOMINA',
            office: 'CHICO 94',
                value: 1600000
            },
            {
            date: '2017/04/20',
            description: 'TRASLADO CTA BANCOL SUC VIRT',
            office: 'CHICO 94',
                value: -10000
            },
            {
            date: '2015/03/10',
            description: 'PAGO NOMINA',
            office: 'CHICO 94',
                value: 1000000
            }
        ] 
    },
    {
        id: 2,
        type: 2,
        account_number: '•••••••••••5236',
        total_quota: 8000000,
        disponible_quota: 1000000,
        total_balance: 1000000,
        minimum_payment: 80000,
        overdue_balance: 0,
        cutoff_date: {
            day_number: '16',
            day: 'MARTES',
            month: 'ABRIL',
            year: '2017'
        },
        next_pay: {
            day_number: '28',
            day: 'JUEVES',
            month: 'ABRIL',
            year: '2017'
        },
        limit_payment: {
            day_number: '02',
            day: 'LUNES',
            month: 'MAYO',
            year: '2017'
        },
      movements: [
        {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 1,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 2,
          currency: 'COP',
          value: 0.86
        },
        {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 3,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 4,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 5,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 6,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 7,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 8,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 9,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 10,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 11,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 12,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 13,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term:14,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 15,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 16,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 17,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term:18,
          currency: 'COP',
          value: 0.86
        },            {
          date: '2017/04/28',
          description: 'STRADIVARIUS COLINA',
          term: 19,
          currency: 'COP',
          value: 160000
        },
        {
          date: '2017/04/20',
          description: 'INTERESES CORRIENTES',
          term: 20,
          currency: 'COP',
          value: 0.86
            }
        ]
    },
    {
        id: 3,
        type: 3,
        avaliable_penalty: 0,
        avaliable_without_penalty: 0,
        investment: 12000000,
        canje_entranse: 200000,
        rentability: 0,
        rentability_percentage: 0,
        rentability_days: 0,
        investment_briefcase: [
            {
                name: 'alianza',
                investment_amount: 400000,
                earnings: 2000,
                losses: -20000,
                type: 'Renta Fija'
            },
            {
                name: 'old mutual',
                investment_amount: 200000,
                earnings: 70000,
                losses: -8000,
                type: 'Renta Variable'
            },
            {
                name: 'btg pactual',
                investment_amount: 200000,
                earnings: 40000,
                losses: -10000,
                type: 'Acciones'
        }
      ]
    }
]
