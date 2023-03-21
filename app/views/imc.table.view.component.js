import { ViewComponent } from "../framework/view.component.js";


export class ImcTableViewComponent extends ViewComponent {
    render() {
        return `
        <table border="1">
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                ${
                    this.state.data &&
                    Object.keys(this.state.data)
                    .map(k=> `
                        <tr>
                            <td>${this.state.data[k]}</td>
                            <td>${k}</td>
                        </tr>
                    `).join('')
                }
            </tbody>
        </table>
        `;
    }
}