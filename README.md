# sherazad-marc/gitcidevB

## Équipe

- **Marc AWAD**
- **Sherazad ABDALLAH**

## Description

Ce projet permet de créer une liste de tâches, de marquer celles qui sont terminées et de suivre le nombre total de tâches effectuées.  
Il a également pour objectif de s'entraîner à l'utilisation de **Git** et **GitHub**, notamment à la gestion de versions, aux **pull requests**, et à la mise en place de **tests automatisés avec Jest**.

## Installation / Lien du dépôt

```bash
git clone https://github.com/sherazad-marc/gitcidevB
```

## Commandes Git utilisées

- `status`
- `branch`
- `checkout`
- `switch`
- `clone`
- `add`
- `pull`
- `push`
- `push -u origin`
- `branch -m`
- `diff`
- `commit`

## Badge CI

[![Jest Tests](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml/badge.svg)](https://github.com/sherazad-marc/gitcidevB/actions/workflows/test.yml)

### Différences entre :

**switch / checkout**

- `checkout` a deux rôles : changer de branche et restaurer un fichier.
- `switch` a un usage unique : changer de branche.

**pull / fetch**

- `fetch` récupère les modifications distantes sans les fusionner.
- `pull` récupère les modifications et les fusionne avec la branche locale.

**rebase / revert**

- `revert` annule un ancien commit en créant un nouveau sans modifier l'historique (il revient en arrière proprement).
- `rebase` réécrit l'historique : les anciens commits sont remplacés par de nouveaux.

### Autres commandes

**tag** : crée un point de repère (label) sur un commit.

**stash** : met temporairement de côté des modifications pour revenir sur une branche propre. Les modifications peuvent être restaurées plus tard.

**release** : ce n'est pas une commande Git mais un concept. Une release correspond à une version stable prête à être publiée.
