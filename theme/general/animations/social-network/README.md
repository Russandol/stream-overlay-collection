# Bandeau réseau sociaux

## Description

Affiche les pseudos des différents réseaux sociaux dans un bandeau animé.

## Comment l'utiliser sous OBS Studio

Pour utiliser le compte à rebours, suivez les étapes suivantes :

- Installer le dossier **social-network** quelque part sur votre ordinateur.
- Ouvrir le fichier `social-network.json` et modifier la zone "pseudo" en 
écrivant le pseudo correspondant à la plateforme. Si vous n'avez pas de compte
sur le réseau en question, ne rien mettre entre les guillemets.
- Dans votre scène ajoutez une nouvelle source de type "_navigateur_".
- Dans les paramètres de la source, cochez "Fichier local" et dans le 
champ "_URL_" entrez le chemin du fichier, par exemple : `c:/mon-dossier/social-network.html`.
