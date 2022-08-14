# Bandeau réseau sociaux

## Description

Affiche les pseudos des différents réseaux sociaux dans un bandeau animé.

## Comment l'utiliser sous OBS Studio

Pour utiliser le compte à rebours, suivez les étapes suivantes :

- Installer le dossier **social-network** quelque part sur votre ordinateur.
- Ouvrir le fichier `social-network.json` et modifier les informations.
- Si vous voulez rajouter un réseau social il faut dupliquer : 
```json
{
  "name": "twitter",
  "pseudo": "pseudo twitter",
  "img": "twitter.png"
}
```
- Ajoutez le logo du réseau dans le dossier `assets/img`
- Indiquez le nom du réseau, votre pseudo et le nom de l'image
- Si jamais le nouveau réseau social ne s'affiche pas, vérifier le contenu
du fichier json avec ce [validateur en ligne](https://jsonformatter.curiousconcept.com)
- Sur OBS Studio, dans votre scène ajoutez une nouvelle source de type "_navigateur_".
- Dans les paramètres de la source, cochez "Fichier local" et dans le 
champ "_URL_" entrez le chemin du fichier, par exemple : `c:/mon-dossier/social-network.html`.
