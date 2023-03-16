import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { k as server_default, _ as _page0, l as deserializeManifest } from './chunks/astro.b4db7f28.mjs';
import { _ as _page1, a as _page2, b as _page3, c as _page4, d as _page5, e as _page6, f as _page7, g as _page8 } from './chunks/pages/all.72dce3bc.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'path-to-regexp';
import 'string-width';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';
/* empty css                                *//* empty css                                 *//* empty css                                         */
const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/gallery/index.astro", _page2],["src/pages/blog/my-first-post.md", _page3],["src/pages/blog/category/[category].astro", _page4],["src/pages/blog/tag/[tag].astro", _page5],["src/pages/blog.astro", _page6],["src/pages/test.astro", _page7],["src/pages/api/gallery.ts", _page8],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.0016628e.css","_astro/my-first-post.500f1d9d.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/my-first-post.500f1d9d.css","_astro/index.cc32e409.css","_astro/blog.0016628e.css"],"scripts":[],"routeData":{"route":"/gallery","type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.0016628e.css","_astro/my-first-post.500f1d9d.css"],"scripts":[],"routeData":{"route":"/blog/my-first-post","type":"page","pattern":"^\\/blog\\/my-first-post\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"my-first-post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/my-first-post.md","pathname":"/blog/my-first-post","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.0016628e.css","_astro/my-first-post.500f1d9d.css"],"scripts":[],"routeData":{"route":"/blog/category/[category]","type":"page","pattern":"^\\/blog\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/blog/category/[category].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/my-first-post.500f1d9d.css","_astro/blog.0016628e.css"],"scripts":[],"routeData":{"route":"/blog/tag/[tag]","type":"page","pattern":"^\\/blog\\/tag\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/blog/tag/[tag].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.0016628e.css","_astro/my-first-post.500f1d9d.css"],"scripts":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/my-first-post.500f1d9d.css","_astro/blog.0016628e.css"],"scripts":[],"routeData":{"route":"/test","type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/api/gallery","type":"endpoint","pattern":"^\\/api\\/gallery$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/gallery.ts","pathname":"/api/gallery","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/coding.3d4a313c.svg","/_astro/avatar.02f6b492.webp","/_astro/blog.0016628e.css","/_astro/index.cc32e409.css","/_astro/my-first-post.500f1d9d.css","/favicon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
