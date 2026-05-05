# Test Project for Workflow Template

Projet minimal pour tester le workflow template Node.js.

## Comment tester

### Option 1: Test local (avant de pusher)

```bash
cd test-project

# Tester que le build fonctionne
npm run build

# Tester que les tests passent ..
npm test

# Tester que le lint passe
npm run lint
```

### Option 2: Test GitHub Actions (recommandé)

1. **Créer une nouvelle repo GitHub** (public ou privée)
2. **Copier les fichiers** de ce dossier
3. **Pusher sur main**:
```bash
git push origin main
```

4. **Regarder Actions** → onglet `Actions` dans GitHub → voir les workflows s'exécuter

### Option 3: Tests spécifiques

**Test 1: Workflow basique (défauts)**
- Lance avec Node 20, npm, tests et build standard
- Validez que tout passe ✓

**Test 2: Security scanning**
- Ajoute CodeQL analysis
- Dure plus longtemps (~2-3 min)
- Regardez l'onglet `Security` pour résultats

**Test 3: Matrix testing**
- Test avec Node 18, 20, 22
- Montre 3 workflows parallèles
- Validez tous les versions passent

## Structure fichiers

```
test-project/
├── .github/workflows/
│   └── ci.yml              
├── src/
│   └── index.js            
├── tests/
│   └── math.test.js        
└── package.json             
```

## Scripts

- `npm test` - Lance tests
- `npm run build` - Lance build
- `npm run lint` - Lance linter

## Attendre à voir

✓ Tests passent
✓ Build réussit  
✓ CodeQL scan réussit (si enabled)
✓ Artifacts uploadés (si enabled)
✓ Les 3 versions Node testées (si matrix)

## Troubleshooting

**Erreur "workflow file not found"**
- Vérifiez que le template workflow est à: `.github/workflows/node-template.yml`
- Doit être en root du repo (pas dans test-project/)

**Tests échouent**
- Lancez `npm test` localement pour déboguer
- Les tests doivent passer avant de pousser

**CodeQL échoue**
- C'est normal pour du JavaScript simple
- Voir: Security tab → Code scanning

## Exemple complet setup

```bash
# 1. Init git repo
git init
git add .
git commit -m "Initial test setup"

# 2. Créer repo GitHub Aprés:
git remote add origin https://github.com/YOUR_ORG/test-repo.git
git branch -M main
git push -u origin main

# 3. Voir Actions exécuter ....
```
