# Évaluation

## Méthode de résolution

Lors du développement de la fonctionnalité `toggleTask`, un conflit est survenu entre les branches :

- `feature/toggle-task`
- `feature/toggle-task-marc`

lors de la fusion vers `dev`.

### Étapes suivies

1. La branche `feature/toggle-task-marc` a été mergée en premier, sans problème.
2. Lors de la tentative de merge de la branche `feature/toggle-task`, Git a signalé un **conflit** sur un fichier modifié dans les deux branches.
3. La fusion automatique via l’interface GitHub n’était pas possible.
4. Nous avons dû **choisir manuellement** quelle version conserver et supprimer la version indésirable.
5. La décision a été de **conserver la version de la branche `feature/toggle-task`**.
6. Après résolution manuelle du conflit, la fusion vers `dev` a été effectuée avec succès.

### Références

- **Pull Request :** [Lien PR](https://github.com/sherazad-marc/gitcidevB/pull/7)
- **Actions GitHub :** [Lien Actions](https://github.com/sherazad-marc/gitcidevB/actions/runs/18554817255)