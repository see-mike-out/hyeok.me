import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.7db5b6d9.js","app/immutable/chunks/index.702c3da6.js"];
export const stylesheets = ["app/immutable/assets/0.6590f98e.css"];
export const fonts = [];
