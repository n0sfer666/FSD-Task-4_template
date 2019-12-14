interface IConfiguration {
    readonly orientation?: TConfigurationOrientation; 
    readonly start?: number[];
    readonly range?: number[];
    readonly step?: number;
    readonly connect?: boolean;
    readonly tooltip?: boolean;
}

type TConfigurationOrientation = 'horizontal' | 'vertical';