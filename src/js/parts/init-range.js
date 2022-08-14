

export class rSlider {
    constructor(args) {
        this.el = document.querySelector(args.element);
        this.min = +this.el.min || 0;
        this.max = +this.el.max || 100;
        this.step = +this.el.step || 1;

        this.dataRange = document.createElement("div");
        this.dataRange.className = "field__range-data";
        this.el.parentElement.insertBefore(this.dataRange,this.el);
        this.updatePos();
        this.el.addEventListener("input",() => {
            this.updatePos();
        });
    }

    getRangePercent() {
        let max = this.el.max,
        min = this.el.min,
        relativeValue = this.el.value - min,
        ticks = max - min,
        percent = relativeValue / ticks;
        return percent;
    }

    updatePos() {
        this.dataRange.innerHTML = this.el.value + '%';
    }
}

window.addEventListener("DOMContentLoaded",() => {
    const range = new rSlider({
        element: "#range"
    })
});