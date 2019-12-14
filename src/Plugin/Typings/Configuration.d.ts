interface IConfiguration {
    orientation: TConfigurationOrientation;
    start: number[];
    step: number;
    connect: boolean;
    tooltip: boolean;
}

type TConfigurationOrientation = 'horizontal' | 'vertical';