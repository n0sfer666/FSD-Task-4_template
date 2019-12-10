'use strict'

class SimpleRangeSlider {
    container: HTMLElement;
    configuration: object;

    constructor(container: HTMLElement, configuration: object) {
        this.container = container;
        this.configuration = configuration;

    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(configuration: object) {
            return new SimpleRangeSlider(<HTMLElement>this, configuration);
        }
    });
}(jQuery))