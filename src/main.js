// src/main.js
import './styles/main.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/print.css';

import { renderShell } from './ui/render.js';
import { createApp } from './app.js';

const root = document.getElementById('app');
if (!root) throw new Error('#app not found in index.html');

renderShell(root);          // <-- builds the shell first
const app = createApp(root);
app.start();