# Projet NestJS - CRUD pour les Entités Users et Notifications

## Description

Ce projet implémente une API RESTful en utilisant le framework NestJS. Il propose des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les entités **Users** et **Notifications**.

## Prérequis

- Node.js (version 12 ou ultérieure)
- npm (version 6 ou ultérieure) ou yarn

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/deuxevi/projet_demo.git
    cd projet_demo
    ```

## Running the app

```bash
# development
$ npm run start
```
## API Endpoints
### Users
*GET /users : Récupérer tous les utilisateurs

*GET /users/:id : Récupérer un utilisateur par son id

*POST /users : Créer un nouvel utilisateur

*PUT /users/: Mettre à jour un utilisateur par ID

*DELETE /users/: Supprimer un utilisateur par ID

###Notifications
*GET /notifications : Récupérer toutes les notifications

*GET /notifications/ : Récupérer une notification par ID

