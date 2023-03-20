import { getImcInformationAPI } from '../drivers/table.imc.api.js';

export class TableImcService {
    tableImc (callback) {
    
        return getImcInformationAPI((response) => {
            if (response)
                callback(response);
        });
    }
}