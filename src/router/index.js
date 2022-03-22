import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import JoinGame from '../views/JoinGame.vue';
import HostGame from '../views/HostGame.vue';
import HowToPlay from '../views/HowToPlay.vue';
import Lobby from '../views/Lobby.vue';
import Play from '../views/Play.vue';

const history = createWebHashHistory();
const routes = [
  { path: '/', component: Home },
  { path: '/join-game', component: JoinGame },
  { path: '/host-game', component: HostGame },
  { path: '/how-to-play', component: HowToPlay },
  { path: '/lobby', component: Lobby },
  { path: '/play', component: Play },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({ history, routes });

export default router;
