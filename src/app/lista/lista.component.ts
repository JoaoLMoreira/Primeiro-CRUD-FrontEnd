import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['NomeCartao', 'NumeroCartao', 'CVC'];
  dataSource = [
    {position: 1, NomeCartao: 'Hydrogen', NumeroCartao: 1.0079, CVC: 'H'},
    {position: 2, NomeCartao: 'Helium', NumeroCartao: 4.0026, CVC: 'He'},
    {position: 3, NomeCartao: 'Lithium', NumeroCartao: 6.941, CVC: 'Li'},
    {position: 4, NomeCartao: 'Beryllium', NumeroCartao: 9.0122, CVC: 'Be'},
    {position: 5, NomeCartao: 'Boron', NumeroCartao: 10.811, CVC: 'B'},
    {position: 6, NomeCartao: 'Carbon', NumeroCartao: 12.0107, CVC: 'C'},
    {position: 7, NomeCartao: 'Nitrogen', NumeroCartao: 14.0067, CVC: 'N'},
    {position: 8, NomeCartao: 'Oxygen', NumeroCartao: 15.9994, CVC: 'O'},
    {position: 9, NomeCartao: 'Fluorine', NumeroCartao: 18.9984, CVC: 'F'},
    {position: 10, NomeCartao: 'Neon', NumeroCartao: 20.1797, CVC: 'Ne'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
