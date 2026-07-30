# Configuration Vercel

## Étapes de configuration

### 1. Créer un projet sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Importer le repository GitHub
3. Vercel détectera automatiquement Vite comme framework

### 2. Récupérer les identifiants Vercel

1. Aller dans **Settings** → **Tokens**
2. Créer un nouveau token avec les permissions `Read & Write`
3. Copier le token

### 3. Configurer les secrets GitHub

Aller dans le repository GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Ajouter les 3 secrets suivants :

- `VERCEL_TOKEN` : Le token créé à l'étape 2
- `VERCEL_ORG_ID` : Votre ID d'organisation Vercel (trouvable dans les paramètres du compte)
- `VERCEL_PROJECT_ID` : ID du projet Vercel (trouvable dans les paramètres du projet)

### 4. Comment trouver VERCEL_ORG_ID et VERCEL_PROJECT_ID

**Option 1 : Via l'interface Vercel**
- Aller dans le projet → **Settings** → **General**
- L'ID du projet est visible dans l'URL ou dans les paramètres

**Option 2 : Via la CLI Vercel**
```bash
npm install -g vercel
vercel login
vercel link
vercel project ls
```

### 5. Déploiement automatique

Une fois les secrets configurés, le déploiement se fera automatiquement à chaque push sur la branche `main`.

Le workflow est configuré dans `.github/workflows/vercel-deploy.yml`.

## Configuration alternative : Déploiement manuel

Si vous préférez déployer manuellement sans GitHub Actions :

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Notes

- Le fichier `vercel.json` configure automatiquement le build et le répertoire de sortie
- Vercel détectera automatiquement le framework Vite
- Le déploiement en production se fait avec la commande `vercel --prod`