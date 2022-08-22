import create from 'zustand';
import { ThemeDto, ThemeTypeDto, ThemeTypesDto, ThemeState } from './type';
export const warmTheme: ThemeDto = {
	primary: '#9ae66e',
	secondary: '#ff884f'
};
export const oceanTheme: ThemeDto = { primary: '#ff884f', secondary: '#9ae66e' };
export const themes: ThemeTypesDto = {
	warm: warmTheme,
	ocean: oceanTheme
};

const useThemeStore = create<ThemeState>((set, get) => ({
	theme: 'warm',
	toggle: () => {
		const { theme } = get();
		const current = 'warm' === theme ? 'ocean' : 'warm';
		set(() => ({
			theme: current
		}));
	}
}));

export { useThemeStore };
