import { ViewComponent } from "../framework/view.component.js";


export class ImcDataViewComponent extends ViewComponent {
    render() {
        let templateStr = "Seu IMC &eacute; <span id='imc'></span>";
        if (!this.state.person) return templateStr;

        return `Seu IMC &eacute; <span id='imc'>${this.state.person.imc}, ${this.state.person.imcDescription}</span>`;
    }
}