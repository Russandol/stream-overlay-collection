# Roue de la chance

## Description

Faites tourner la roue et voyez ce que le destin vous réserve !

## Comment l'utiliser sous OBS Studio

Pour utiliser la roue de la chance, suivez les étapes suivantes :

- Installer le dossier **wheel-challenge** quelque part sur votre ordinateur.
- Ouvrir le fichier `wheel-challenge.json` et modifier les informations.
- Si vous voulez rajouter un défi il faut dupliquer : 
```json
{
  "label": "défi 1",
  "description": "Description du défi 1"
}
```
- Supprimer ce contenu si jamais vous ne voulez pas que ce défi s'affiche
- Indiquez le label du défi et la description
- Si jamais les défis ne s'affichent pas, vérifier le contenu
du fichier json avec ce [validateur en ligne](https://jsonformatter.curiousconcept.com)
- Sur OBS Studio, dans votre scène ajoutez une nouvelle source de type "_navigateur_".
- Dans les paramètres de la source, cochez "Fichier local" et dans le 
champ "_URL_" entrez le chemin du fichier, par exemple : `c:/mon-dossier/wheel-challenge.html`.
- Dans les champs "_Largeur_" et "_Hauteur_" indiquez les valeurs respectives
"1000" et "500".
- Pour que la roue se relance à chaque activation de la source, cochez 
l'option "_Désactiver la source quand elle n'est pas visible_".

## Sources 

Le script a été trouvé sur [ce site](http://bl.ocks.org/jrue/a2aaf36b3c096925ccbf) 
