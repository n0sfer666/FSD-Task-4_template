class SimpleRangeSlider {
    constructor(public container: HTMLElement, private configuration: IConfiguration) {
        let defaultCOnfiguration: IConfiguration = {
            orientation: 'horizontal',
            start: [10],
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        }
    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(configuration: IConfiguration) {
            return new SimpleRangeSlider(<HTMLElement>this, <IConfiguration>configuration);
        }
    });
}(jQuery))