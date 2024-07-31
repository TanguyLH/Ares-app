declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT?: string;
			BACKEND_URL?: string;
		}
	}
}

export { }
