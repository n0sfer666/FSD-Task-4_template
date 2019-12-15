interface IModelConfiguration {
    readonly orientation?: TConfigurationOrientation; 
    readonly start?: number[];
    readonly range?: number[];
    readonly step?: number;
    readonly connect?: boolean;
    readonly tooltip?: boolean;
    size_of_Slider_in_px?: number
}