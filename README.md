# sherazad-marc /gitcidevB

## Marc et Sherazad

## Description

Ce projet permet de créer une liste de tâches, de marquer celles qui sont terminées et de suivre le nombre total de tâches effectuées. Ainsi que s'entrainer à la gestion de version, pull request avec GitHub et les tests avec Jest.

## Installation / Lien du dépôt

- Copiez ce lien : [https://github.com/sherazad-marc/gitcidevB](https://github.com/sherazad-marc/gitcidevB)
- Ouvrez votre terminal
- Tapez `git clone` suivi du lien que vous venez de copier

## Liens des PR

- https://github.com/sherazad-marc/gitcidevB/pull/1
- https://github.com/sherazad-marc/gitcidevB/pull/2
- https://github.com/sherazad-marc/gitcidevB/pull/3
- https://github.com/sherazad-marc/gitcidevB/pull/4
- https://github.com/sherazad-marc/gitcidevB/pull/5
- https://github.com/sherazad-marc/gitcidevB/pull/6
- https://github.com/sherazad-marc/gitcidevB/pull/7

## Commandes utilisées

- status
- branch
- checkout
- switch
- clone
- add
- pull
- push
- push -u origin
- branch -m
- diff
- commit

## Badge CI

[![Jest Tests](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml/badge.svg)](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml)


## Description des commandes

### Différences entre :

- **switch / checkout** :  
  `checkout` a deux rôles : changer de branche et restaurer un fichier.  
  `switch` a un usage unique : changer de branche.

- **pull / fetch** :  
  `fetch` se contente de récupérer les modifications sans les fusionner.  
  `pull` récupère les modifications **et** les fusionne avec la branche locale.

- **rebase / revert** :  
  `revert` annule un ancien commit en créant un nouveau sans modifier l’historique (il revient en quelque sorte en arrière).  
  `rebase` réécrit l’historique : les anciens commits sont remplacés par de nouveaux.

### Autres commandes :

- **tag** : permet de créer un point de repère (label) sur un commit.
- **stash** : permet de mettre de côté des modifications pour revenir à une branche propre. Les modifications sont stockées temporairement et peuvent être restaurées plus tard.
- **release** : ce n’est pas une commande Git mais un concept. Une _release_ correspond à une version stable, prête à être publiée. On utilise généralement les branches et les tags pour créer une branche _release_ et la marquer comme stable.
