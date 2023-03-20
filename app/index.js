import { initialize } from './calculate.imc.js';
import { initializeTable } from './table.imc.js';

window.onload = function() {
    initialize();
    initializeTable();
}