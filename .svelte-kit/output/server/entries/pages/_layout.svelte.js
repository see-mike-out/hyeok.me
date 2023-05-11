import { c as create_ssr_component } from "../../chunks/index2.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="container"><h1>Hyeok Kim</h1></header>

${slots.default ? slots.default({}) : ``}

<footer class="container"><span>© 2023 Hyeok</span></footer>`;
});
export {
  Layout as default
};
