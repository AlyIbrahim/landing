export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/tenants.svelte"),
	() => import("../../src/routes/todos/index.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"about": [[0, 2], [1]],
	"tenants": [[0, 4], [1]],
	"todos": [[0, 5], [1], 1]
};