import { CalculateImcService } from '../services/calculate.imc.service.js';

export class ImcTableController {
    constructor(view) {
        this.view = view;
        this.svc = new CalculateImcService();
        this.execute();
    }

    execute() {
        this.svc.loadTable( imcTable => this.view.update({data:imcTable}));
    }
}
