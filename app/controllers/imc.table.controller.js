import { TableImcService } from '../services/table.imc.service.js';

export class ImcTableController {
    constructor(view) {
        this.view = view;
        this.svc = new TableImcService();
    }

    execute() {
        this.svc.tableImcAPI( response => this.view.update({ response }));
    }
}
