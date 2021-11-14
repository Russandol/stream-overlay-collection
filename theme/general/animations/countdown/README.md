# Compte à rebours

## Description

![Exemple](assets/img/example.png)

Comme son nom l'indique, cette animation est un compte à rebours.

## Comment l'utiliser sous OBS Studio

Pour utiliser le compte à rebours, suivez les étapes suivantes : 

- Installer le dossier **countdown** quelque part sur votre ordinateur.
- Dans votre scène ajoutez une nouvelle source de type "_navigateur_".
- Dans le champ "_URL_" entrez le chemin du fichier précédé par : `file:///`. 
Exemple : `file:///c:/mon-dossier/countdown.html`.
- Pour définir la durée du compte à rebours, il faut ajouter le paramètre 
"timer" à l'url. Pour une durée de 3 minutes, avec l'exemple précédent 
ça donne : `file:///c:/mon-dossier/countdown.html?timer=180`.
- Pour que le compte à rebours se réinitialise à chaque fois que vous activez
la source, il faut cocher l'option "_Rafraîchir le navigateur lorsque la scène
devient active_".

## Paramétrages

Il est possible de styliser ce compte à rebours à votre convenance grâce 
à l'option "_CSS personnalisé_" dans les propriétés de votre source.

Des connaissances en CSS sont bien entendu nécessaires.

Les différents éléments qui composent le compte à rebours possèdent des
identifiants.
Ses éléments sont : 
- **\#countdown** : le conteneur du compte à rebours.
- **\#minutes** : correspond aux chiffres des minutes.
- **\#seconds** : correspond aux chiffres des secondes.

Par exemple, si je souhaite que la police du compte à rebours soit "arial", 
que les heures soient écritent en rouge et les minutes en bleu :

```css
#countdown{font-family: arial;}
#minutes{color: red;}
#seconds{color: blue;}
```
