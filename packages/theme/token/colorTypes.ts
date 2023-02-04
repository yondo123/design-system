type HEX = `#${string}`;
interface BaseColorScheme {
    base: string;
    lighten1: string;
    lighten2: string;
    lighten3: string;
    lighten4: string;
    lighten5: string;
    darken1: string;
    darken2: string;
    darken3: string;
    darken4: string;
}

interface AccentColorScheme extends BaseColorScheme {
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
}

type ShadesColorSchme = {
    black: string;
    white: string;
    transparent: string;
};

type ExtendedPallete =
    | 'red'
    | 'pink'
    | 'purple'
    | 'deepPurple'
    | 'indigo'
    | 'blue'
    | 'blue'
    | 'lightBlue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lightGreen'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deepOrange';
type CommonPallete = 'brown' | 'blueGrey' | 'grey';
type ShadesPallete = 'shades';

type ColorToken = `${ExtendedPallete}-${keyof BaseColorScheme}` | `${CommonPallete}-${keyof ShadesColorSchme}` | `${ShadesPallete}-${keyof AccentColorScheme}`;

type Color = {
    [key: string]: any;
    red: Readonly<AccentColorScheme>;
    pink: Readonly<AccentColorScheme>;
    purple: Readonly<AccentColorScheme>;
    deepPurple: Readonly<AccentColorScheme>;
    indigo: Readonly<AccentColorScheme>;
    blue: Readonly<AccentColorScheme>;
    lightBlue: Readonly<AccentColorScheme>;
    cyan: Readonly<AccentColorScheme>;
    teal: Readonly<AccentColorScheme>;
    green: Readonly<AccentColorScheme>;
    lightGreen: Readonly<AccentColorScheme>;
    lime: Readonly<AccentColorScheme>;
    yellow: Readonly<AccentColorScheme>;
    amber: Readonly<AccentColorScheme>;
    orange: Readonly<AccentColorScheme>;
    deepOrange: Readonly<AccentColorScheme>;
    brown: Readonly<BaseColorScheme>;
    blueGrey: Readonly<BaseColorScheme>;
    grey: Readonly<BaseColorScheme>;
    shades: Readonly<ShadesColorSchme>;
};

export type { HEX, ColorToken, Color };
