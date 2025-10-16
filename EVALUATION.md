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

- **Pull Request en Conflit :** [Lien PR](https://github.com/sherazad-marc/gitcidevB/pull/7)
- **Actions GitHub :** [Lien Actions](https://github.com/sherazad-marc/gitcidevB/actions/runs/18554817255)

## Liens des Pull Requests

- [PR #1](https://github.com/sherazad-marc/gitcidevB/pull/1) - refactor: reorganize project structure
- [PR #2](https://github.com/sherazad-marc/gitcidevB/pull/2) - Ci/set up jest
- [PR #3](https://github.com/sherazad-marc/gitcidevB/pull/3) - feat : création classe TaskList et de la méthode addTask 
- [PR #4](https://github.com/sherazad-marc/gitcidevB/pull/4) - feat: add countDone() function to count completed tasks
- [PR #5](https://github.com/sherazad-marc/gitcidevB/pull/5) - création classe TaskList et de la méthode addTask - 
- [PR #6](https://github.com/sherazad-marc/gitcidevB/pull/6) - Feature/toggle task marc --> **Merge conflict**
- [PR #7](https://github.com/sherazad-marc/gitcidevB/pull/7) - Feature/toggle task --> **Merge conflict**
- [PR #8](https://github.com/sherazad-marc/gitcidevB/pull/8) - Test/set up jest
- [PR #9](https://github.com/sherazad-marc/gitcidevB/pull/9) - feat: ajout de la page d'évaluation de lecture
