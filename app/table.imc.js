import { ImcTableController } from './controllers/imc.table.controller.js';
import { ImcTableViewComponent } from './views/imc.table.view.component.js';

export function getIMCInformation(view) {
    let ctr = new ImcTableController(view);
    
    return function () {
        ctr.execute();
    }
}

export function initializeTable() {
    new ImcTableViewComponent();
    getIMCInformation();
}