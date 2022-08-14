import React, { ReactNode, createContext, useContext } from 'react';
import type { GetConfigQuery } from '@/graphcms/generated/graphql';
import { useGetConfigQuery } from '@/graphcms/generated/graphql';
import { Alert } from '@/components/ui/alert';
import { Loader } from '@/components/ui/loader';

const ConfigContext = createContext<GetConfigQuery | undefined>(undefined);
export interface ConfigContextProviderProps {
	children: ReactNode;
}

const ConfigContextProvider: React.FC<ConfigContextProviderProps> = ({ children }) => {
	const [result] = useGetConfigQuery();

	const { data, fetching, error } = result;

	if (fetching) {
		return <Loader />;
	}
	if (error) {
		return <Alert />;
	}

	return <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>;
};

const useConfig = () => {
	const context = useContext(ConfigContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	const {
		configs: [config]
	} = context;
	return config;
};

export { ConfigContextProvider, useConfig };
