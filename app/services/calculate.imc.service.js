import { calculateImcAPI } from '../drivers/calculate.imc.api.js';
import { Person } from '../models/domain.js';

export class CalculateImcService {
    calculateImc (height, weight, callback) {
        if (height == null || height == 0) return null;
        if (weight == null || weight == 0) return null;
    
        return calculateImcAPI(new Person(height, weight), (response) => {
            if (response && response.imc)
                callback(new Person(height, weight, response.imc, response.imcDescription));
        });
    }
}