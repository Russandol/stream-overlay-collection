# Chûte de neige

## Description

![example](assets/img/example.gif)

Faites tomber la neige sur votre stream !

## Comment l'utiliser sous OBS Studio

Pour utiliser cette animation, suivez les étapes suivantes :

- Installer le dossier **snow-fall** quelque part sur votre ordinateur.
- Dans votre scène ajoutez une nouvelle source de type "_navigateur_".
- Dans le champ "_URL_" entrez le chemin du fichier précédé par : `file:///`.
  Exemple : `file:///c:/mon-dossier/snow-fall.html`.
- Par défaut 50 flocons tombent. Vous pouvez changer ce nombre en ajoutant 
le paramètre "number" à l'url. Pour afficher 100 flocons, avec l'exemple 
précédent ça donne : `file:///c:/mon-dossier/snow-fall.html?number=100`. 
- Pour que l'animation se réinitialise à chaque fois que vous activez
la source, il faut cocher l'option "_Rafraîchir le navigateur lorsque la scène
devient active_".

## Source

Cette animation a été faite à partir du script disponible sur ce site : 
[de la neige sur vos sites web](http://www.kommunauty.fr/article-727-javascript-de-la-neige-sur-vos-sites-web)
