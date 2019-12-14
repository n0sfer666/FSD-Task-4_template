class SimpleRangeSlider {
    container: HTMLElement;
    configuration: IConfiguration;

    constructor(container: HTMLElement, configuration: IConfiguration) {
        this.container = container;
        this.configuration = configuration;
    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(configuration: IConfiguration) {
            return new SimpleRangeSlider(<HTMLElement>this, <IConfiguration>configuration);
        }
    });
}(jQuery))