import { Faculty } from "./faculty";

export interface User {
	id?: number;
	identifier?: string;
	name?: string;
	password?: string;
	batch?: string;
	email?: string;
	phone?: string;
	in_class?: string;
	address?: string;
	gender?: string;
	avatar?: string;
	faculty?: Faculty;
}

	