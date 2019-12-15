/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Plugin/Plugin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Plugin/Model/Calculator.ts":
/*!****************************************!*\
  !*** ./src/Plugin/Model/Calculator.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate_range_of_available_values = function (range, step) {
        var arr = [range[0]];
        var isDone = false;
        while (!isDone) {
            if (arr[arr.length - 1] + step < range[1]) {
                arr.push(arr[arr.length - 1] + step);
            }
            else {
                arr.push(range[1]);
                isDone = true;
            }
        }
        return arr;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBZUEsQ0FBQztJQWRVLHdEQUFtQyxHQUExQyxVQUEyQyxLQUF1QixFQUFFLElBQVk7UUFDNUUsSUFBSSxHQUFHLEdBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUM7UUFFNUIsT0FBTSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksZ0NBQVUifQ==

/***/ }),

/***/ "./src/Plugin/Model/Model.ts":
/*!***********************************!*\
  !*** ./src/Plugin/Model/Model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = __webpack_require__(/*! ./Calculator */ "./src/Plugin/Model/Calculator.ts");
var Model = (function () {
    function Model(configuration) {
        this.configuration = configuration;
        this.calculator = new Calculator_1.Calculator();
        this.configuration.range_of_available_values = this.calculator.calculate_range_of_available_values(this.configuration.range, this.configuration.step);
        console.log(this.configuration);
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwQztBQUUxQztJQUVJLGVBQW1CLGFBQXlCO1FBQXpCLGtCQUFhLEdBQWIsYUFBYSxDQUFZO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLHNCQUFLIn0=

/***/ }),

/***/ "./src/Plugin/Plugin.ts":
/*!******************************!*\
  !*** ./src/Plugin/Plugin.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __webpack_require__(/*! ./Model/Model */ "./src/Plugin/Model/Model.ts");
var SimpleRangeSlider = (function () {
    function SimpleRangeSlider(container, configuration) {
        this.container = container;
        this.configuration = configuration;
        var default_Configuration = {
            orientation: 'horizontal',
            start: 10,
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        };
        var model_Configuration = {
            orientation: this.configuration.orientation === undefined ? default_Configuration.orientation : this.configuration.orientation,
            start: this.configuration.start === undefined ? default_Configuration.start : this.configuration.start,
            range: this.configuration.range === undefined ? default_Configuration.range : this.configuration.range,
            step: this.configuration.step === undefined ? default_Configuration.step : this.configuration.step,
            connect: this.configuration.connect === undefined ? default_Configuration.connect : this.configuration.connect,
            tooltip: this.configuration.tooltip === undefined ? default_Configuration.tooltip : this.configuration.tooltip
        };
        model_Configuration.size_of_Slider_in_px = model_Configuration.orientation === 'horizontal' ? this.container.get(0).offsetWidth : this.container.get(0).offsetHeight;
        this.model = new Model_1.Model(model_Configuration);
    }
    return SimpleRangeSlider;
}());
exports.SimpleRangeSlider = SimpleRangeSlider;
;
(function ($) {
    $.fn.extend({
        SimpleRangeSlider: function (configuration) {
            return new SimpleRangeSlider(this, configuration);
        }
    });
}(jQuery));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBQ3RDO0lBR0ksMkJBQW9CLFNBQWlCLEVBQVUsYUFBNkI7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUV4RSxJQUFJLHFCQUFxQixHQUFtQjtZQUN4QyxXQUFXLEVBQUUsWUFBWTtZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixJQUFJLEVBQUUsQ0FBQztZQUNQLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQTtRQUVELElBQUksbUJBQW1CLEdBQWU7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDOUgsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUUsYUFBYSxDQUFDLEtBQUs7WUFDdEcsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUUsYUFBYSxDQUFDLEtBQUs7WUFDdEcsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUUsYUFBYSxDQUFDLElBQUk7WUFDbEcsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87WUFDOUcsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDakgsQ0FBQTtRQUVELG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXJLLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLDhDQUFpQjtBQThCOUIsQ0FBQztBQUFBLENBQUMsVUFBUyxDQUFlO0lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ1IsaUJBQWlCLEVBQUUsVUFBUyxhQUE2QjtZQUNyRCxPQUFPLElBQUksaUJBQWlCLENBQVMsSUFBSSxFQUFrQixhQUFhLENBQUMsQ0FBQztRQUM5RSxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEifQ==

/***/ })

/******/ });