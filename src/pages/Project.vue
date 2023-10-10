<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-4">Bienvenue sur Mon Site Web</h1>
    </div>
  </div>

  <!-- Conteneur flexbox pour les cartes -->
  <div class="card-container">
    <div class="card" style="width: 18rem">
      <img src="public\images\couleur.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img
        src="public\images\Plan de travail 1 copie 5.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere else</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Styles pour le conteneur flexbox */
.card-container {
  display: flex; /* Utiliser la flexbox */
  justify-content: space-evenly; /* Aligner les éléments avec un espace égal entre eux */
}

h1 {
  text-align: center;
}
</style>
