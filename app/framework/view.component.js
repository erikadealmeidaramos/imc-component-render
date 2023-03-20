export class ViewComponent {

    constructor() {
        this.elementTagName = this.__proto__.constructor.name;
        this.element = document.querySelector(this.elementTagName);
        this.state = {};
        this.paint();
    }

    update(state) {
        this.state = {
            ...this.state,
            ...state
        };
        this.paint();
    }

    paint() {
        this.element.innerHTML = this.render();
    }

    render() {
        throw new Error("Todo componente DEVE sobrescrever render()");
    }
}