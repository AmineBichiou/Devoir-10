import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits : Produit[];
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }

  ngOnInit(): void {
  }
  supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}
}
