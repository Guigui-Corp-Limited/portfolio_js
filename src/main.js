import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

import 'bootstrap';
import './assets/custom.scss';

import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Project from './pages/Project.vue';
import Contact from './pages/Contact.vue';

// Définition des routes
const routes = [
  { path: '/', component: Home },
  { path: '/a-propos', component: About },
  { path: '/projets', component: Project },
  { path: '/contact', component: Contact },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp(App);
// Utilisation du routeur dans l'application
app.use(router);

// Montage de l'application sur l'élément #app de index.html
app.mount('#app');