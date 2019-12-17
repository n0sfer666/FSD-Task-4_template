export class SimpleRangeSlider {

    constructor(private container: JQuery, private user_configuration: IConfiguration) {
        
        let default_Configuration: IConfiguration = {
            orientation: 'horizontal',
            start: 10,
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        }

<<<<<<< HEAD
        let model_Configuration: IModelData = {
            orientation: this.configuration.orientation === undefined ? default_Configuration.orientation : this.configuration.orientation,
            start: this.configuration.start === undefined ? default_Configuration.start :this. configuration.start,
            range: this.configuration.range === undefined ? default_Configuration.range :this. configuration.range,
            step: this.configuration.step === undefined ? default_Configuration.step :this. configuration.step,
            connect: this.configuration.connect === undefined ? default_Configuration.connect : this.configuration.connect,
            tooltip: this.configuration.tooltip === undefined ? default_Configuration.tooltip : this.configuration.tooltip
=======
        let configuration: IConfiguration = {
            orientation: this.user_configuration.orientation === undefined ? default_Configuration.orientation : this.user_configuration.orientation,
            start: this.user_configuration.start === undefined ? default_Configuration.start : this.user_configuration.start,
            range: this.user_configuration.range === undefined ? default_Configuration.range : this.user_configuration.range,
            step: this.user_configuration.step === undefined ? default_Configuration.step : this.user_configuration.step,
            connect: this.user_configuration.connect === undefined ? default_Configuration.connect : this.user_configuration.connect,
            tooltip: this.user_configuration.tooltip === undefined ? default_Configuration.tooltip : this.user_configuration.tooltip
>>>>>>> iss1
        }

        // tmp
        console.log('model config: ' + configuration);
        console.log('user config: ' + this.user_configuration);
        console.log('container: ' + this.container);
    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(user_configuration: IConfiguration) {
            return new SimpleRangeSlider(<JQuery>this, <IConfiguration>user_configuration);
        }
    });
}(jQuery))