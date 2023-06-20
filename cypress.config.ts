import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: 'public/api/data',
	projectId: 'ivvovd',
	e2e: {
		chromeWebSecurity: false,
		baseUrl: 'http://127.0.0.1:4173/ai4d-research-bank-test/',
		env: {
			// override-prefix
			URL_PREFIX: '/ai4d-research-bank-test'
		},
		supportFile: false,
		specPattern: 'cypress/e2e/**/*.ts'
	}
})
