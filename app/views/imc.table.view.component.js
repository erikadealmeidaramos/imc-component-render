import { ViewComponent } from "../framework/view.component.js";


export class ImcTableViewComponent extends ViewComponent {
    render() {
        let templateStr = "";
        if (!this.state) return templateStr;

        let records = "";

        if(this.state != null)
        this.state.forEach((value,key)=>{
            records += `
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>
            `;
        });

        return `
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                ${records}
            </tbody>
        </table>
        `;
    }
}