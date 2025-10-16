# sherazad-mark /gitcidevB
## Mark et Sherazad

## Description

Ce projet crée une liste de tâches et permet de créer une liste de tâches, de marquer celles qui sont terminées et de suivre le nombre total de tâches effectuées.



## Installation/Lien dépôt

-   Copiez ce lien : [https://github.com/sherazad-marc/gitcidevB](https://github.com/sherazad-marc/gitcidevB)
    
-   Rentrez dans votre Terminale
    
-   puis tapez ‘git clone’ suivie du lien que vous venez de copier

## Lien des PR

- https://github.com/sherazad-marc/gitcidevB/pull/1
- https://github.com/sherazad-marc/gitcidevB/pull/2
- https://github.com/sherazad-marc/gitcidevB/pull/3
- https://github.com/sherazad-marc/gitcidevB/pull/4
- https://github.com/sherazad-marc/gitcidevB/pull/5
- https://github.com/sherazad-marc/gitcidevB/pull/6
- https://github.com/sherazad-marc/gitcidevB/pull/7

## Commande utiliser

- status
- branch
- checkout
- switch
- clone
- add
- pull
- push
- push -u origin 
- git branch -m"
- diff
- commit


## Badge CI

[![Jest Tests](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml/badge.svg)](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml)

//Ne pas garder ce badge CI mauvais résultat !

## Description commandes

Différence entre : 

- switch/checkout : Le checkout à deux rôle, changer notre branche et restaurer un fichier. Alors que le switch à un usage unique, qui est de de changer de branche.
- pull/fetch : Fetch se contente de récupérées modification. Pull quant à lui a pour récupère les modifications et les fusionne avec notre branch locale.
- rebase/revert : La commande revert annule un ancien commit en créent une nouvelle sans modifier l'historique, il revient quelque sorte en arrière. Rebase, lui réécrit la base et donc modifie l'historique et les anciens commit sont remplacés par des nouveaux.

Description des commandes : 

- tag : Permet de créer un point de repère, un label sur un commit.
- stash : permet de mettre de côté des modifications faite afin de revenir sur une branch plus propre. Cette commande stocke sur le côté les modifications afin qu'on puisse y accéder plus tard.
- release : Ce n'est pas une commande git, mais plutôt un concept. 'release' est une version stable, prête à l'envoi de notre code. On utilise la plupart du temps branch et tag pour créer une branche release et la marquer comme stable.
