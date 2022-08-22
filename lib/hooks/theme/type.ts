export interface ThemeDto {
	primary: string;
	secondary: string;
}
export type ThemeTypeDto = 'warm' | 'ocean';
export type ThemeTypesDto = {
	[key in ThemeTypeDto]: {
		primary: string;
		secondary: string;
	};
};
export type ThemeState = {
	theme: ThemeTypeDto;
	toggle: () => void;
};
