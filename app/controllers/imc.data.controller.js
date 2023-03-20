import { CalculateImcService } from '../services/calculate.imc.service.js';

export class ImcDataController {
    constructor(view) {
        this.view = view;
        this.svc = new CalculateImcService();
    }

    execute(height, weight) {
        this.svc.calculateImc(height, weight, person => this.view.update({ person }));
    }
}
