import americano from '../../../../../assets/coffees/americano.png'
import arabe from '../../../../../assets/coffees/arabe.png'
import cafeComLeite from '../../../../../assets/coffees/cafe-com-leite.png'
import cafeGelado from '../../../../../assets/coffees/cafe-gelado.png'
import capuccino from '../../../../../assets/coffees/capuccino.png'
import chocolateQuente from '../../../../../assets/coffees/chocolate-quente.png'
import cubano from '../../../../../assets/coffees/cubano.png'
import expressoCremoso from '../../../../../assets/coffees/expresso-cremoso.png'
import expresso from '../../../../../assets/coffees/expresso.png'
import havaiano from '../../../../../assets/coffees/havaiano.png'
import irlandes from '../../../../../assets/coffees/irlandes.png'
import latte from '../../../../../assets/coffees/latte.png'
import macchiato from '../../../../../assets/coffees/macchiato.png'
import mochaccino from '../../../../../assets/coffees/mochaccino.png'


type coffeeListDataType = {
    id: number;
    image: string;
    type: string[]
    title: string;
    description: string;
    price: string;
    quantity: number
}

export const cooffeeListData: coffeeListDataType[] = [
    {
        id: 1,
        image: expresso,
        type: ['TRADICIONAL'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '5,90',
        quantity: 1
    },
    {
        id: 2,
        image: americano,
        type: ['TRADICIONAL'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '7,90',
        quantity: 1
    },
    {
        id: 3,
        image: expressoCremoso,
        type: ['TRADICIONAL'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '5,90',
        quantity: 1
    },
    {
        id: 4,
        image: cafeGelado,
        type: ['TRADICIONAL', 'GELADO'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '3,90',
        quantity: 1
    },
    {
        id: 5,
        image: cafeComLeite,
        type: ['TRADICIONAL', 'COM LEITE'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '4,90',
        quantity: 1
    },
    {
        id: 6,
        image: latte,
        type: ['TRADICIONAL', 'COM LEITE'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '7,90',
        quantity: 1
    },
    {
        id: 7,
        image: capuccino,
        type: ['TRADICIONAL', 'COM LEITE'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '6,90',
        quantity: 1
    },
    {
        id: 8,
        image: macchiato,
        type: ['TRADICIONAL', 'COM LEITE'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: '5,90',
        quantity: 1
    },
    {
        id: 9,
        image: mochaccino,
        type: ['TRADICIONAL', 'COM LEITE'],
        title: 'Expresso Tradicional',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '6,90',
        quantity: 1
    },
    {
        id: 10,
        image: chocolateQuente,
        type: ['ESPECIAL', 'COM LEITE'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '6,90',
        quantity: 1
    },
    {
        id: 11,
        image: cubano,
        type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '7,90',
        quantity: 1
    },
    {
        id: 12,
        image: havaiano,
        type: ['ESPECIAL'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '4,90',
        quantity: 1
    },
    {
        id: 13,
        image: arabe,
        type: ['ESPECIAL'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '5,90',
        quantity: 1
    },
    {
        id: 14,
        image: irlandes,
        type: ['ESPECIAL', 'ALCOÓLICO'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '8,90',
        quantity: 1
    },
]