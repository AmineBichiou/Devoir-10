import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  categories! : Categorie[];
  idCategorie!: number;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.produits = this.produitService.listeProduits();
  }
  onChange() {
    // console.log(this.IdCategorie);
     this.produits =  this.produitService.rechercherParCategorie(this.idCategorie);
     console.log(this.produits);
     
     }
     supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
  this.produitService.supprimerProduit(p);
  this.produits =  this.produitService.rechercherParCategorie(this.idCategorie);
  
}
}

}
