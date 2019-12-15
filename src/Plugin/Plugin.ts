import { Model } from './Model/Model';
export class SimpleRangeSlider {
    model: Model;

    constructor(private container: JQuery, private configuration: IConfiguration) {
        
        let default_Configuration: IConfiguration = {
            orientation: 'horizontal',
            start: 10,
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        }

        let model_Configuration: IModelData = {
            orientation: this.configuration.orientation === undefined ? default_Configuration.orientation : this.configuration.orientation,
            start: this.configuration.start === undefined ? default_Configuration.start :this. configuration.start,
            range: this.configuration.range === undefined ? default_Configuration.range :this. configuration.range,
            step: this.configuration.step === undefined ? default_Configuration.step :this. configuration.step,
            connect: this.configuration.connect === undefined ? default_Configuration.connect : this.configuration.connect,
            tooltip: this.configuration.tooltip === undefined ? default_Configuration.tooltip : this.configuration.tooltip
        }

        model_Configuration.size_of_Slider_in_px = model_Configuration.orientation === 'horizontal' ? this.container.get(0).offsetWidth : this.container.get(0).offsetHeight;

        this.model = new Model(model_Configuration);
    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(configuration: IConfiguration) {
            return new SimpleRangeSlider(<JQuery>this, <IConfiguration>configuration);
        }
    });
}(jQuery))