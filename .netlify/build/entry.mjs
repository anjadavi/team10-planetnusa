import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BsW3lW_z.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/listeview.astro.mjs');
const _page2 = () => import('./pages/marathon.astro.mjs');
const _page3 = () => import('./pages/nusabootcamp.astro.mjs');
const _page4 = () => import('./pages/nusaruns.astro.mjs');
const _page5 = () => import('./pages/nusaswims.astro.mjs');
const _page6 = () => import('./pages/nusatalks.astro.mjs');
const _page7 = () => import('./pages/singleview.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/listeview.astro", _page1],
    ["src/pages/marathon.astro", _page2],
    ["src/pages/nusabootcamp.astro", _page3],
    ["src/pages/nusaruns.astro", _page4],
    ["src/pages/nusaswims.astro", _page5],
    ["src/pages/nusatalks.astro", _page6],
    ["src/pages/singleview.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9bf4ff4c-f50a-494d-b6c7-1d6cf39fbda8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
