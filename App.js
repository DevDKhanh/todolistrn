import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navigation from './src/app/navigation';
import reducers from './src/app/reducers';

const store = createStore(reducers);

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar hidden={true} />
			<Navigation />
		</Provider>
	);
}
