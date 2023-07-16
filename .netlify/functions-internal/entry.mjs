import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { h as deserializeManifest, renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';
import 'fs';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'node:path';
import 'mime/lite.js';
import 'path';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';

const _page0  = () => import('./renderers.mjs').then(n => n.i);
const _page1  = () => import('./chunks/index@_@astro.bfba5db7.mjs');
const _page2  = () => import('./chunks/index@_@astro.88a75827.mjs');
const _page3  = () => import('./chunks/size-oyle-geliyorsa-oyledir@_@mdx.13b065b6.mjs');
const _page4  = () => import('./chunks/blog-altyapisi@_@mdx.a6e5c34f.mjs');
const _page5  = () => import('./chunks/_category_@_@astro.b629d1fc.mjs');
const _page6  = () => import('./chunks/_tag_@_@astro.3097489d.mjs');
const _page7  = () => import('./chunks/blog@_@astro.9f4293bc.mjs');
const _page8  = () => import('./chunks/test@_@astro.2fd962de.mjs');
const _page9  = () => import('./chunks/gallery@_@ts.fc6aa2e0.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/gallery/index.astro", _page2],["src/pages/blog/size-oyle-geliyorsa-oyledir.mdx", _page3],["src/pages/blog/blog-altyapisi.mdx", _page4],["src/pages/blog/category/[category].astro", _page5],["src/pages/blog/tag/[tag].astro", _page6],["src/pages/blog.astro", _page7],["src/pages/test.astro", _page8],["src/pages/api/gallery.ts", _page9]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.e76709a0.css"},{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"},{"type":"external","src":"/_astro/index.aeca8764.css"},{"type":"external","src":"/_astro/blog.e76709a0.css"}],"routeData":{"route":"/gallery","type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"},{"type":"external","src":"/_astro/blog.e76709a0.css"}],"routeData":{"route":"/blog/size-oyle-geliyorsa-oyledir","type":"page","pattern":"^\\/blog\\/size-oyle-geliyorsa-oyledir\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"size-oyle-geliyorsa-oyledir","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/size-oyle-geliyorsa-oyledir.mdx","pathname":"/blog/size-oyle-geliyorsa-oyledir","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.e76709a0.css"},{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"}],"routeData":{"route":"/blog/blog-altyapisi","type":"page","pattern":"^\\/blog\\/blog-altyapisi\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"blog-altyapisi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/blog-altyapisi.mdx","pathname":"/blog/blog-altyapisi","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.e76709a0.css"},{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog-altyapisi.26c10f1f.css"},{"type":"external","src":"/_astro/blog.e76709a0.css"}],"routeData":{"route":"/test","type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/gallery","type":"endpoint","pattern":"^\\/api\\/gallery$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/gallery.ts","pathname":"/api/gallery","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/home/mert/_Development/my-codes/personal-blog/src/pages/blog/blog-altyapisi.mdx",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/blog/category/[category].astro",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/blog/tag/[tag].astro",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/blog/size-oyle-geliyorsa-oyledir.mdx",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/gallery/index.astro",{"propagation":"none","containsHead":true}],["/home/mert/_Development/my-codes/personal-blog/src/pages/test.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog/blog-altyapisi.mdx":"chunks/pages/blog-altyapisi.mdx.0d64853d.mjs","/src/pages/api/gallery.ts":"chunks/pages/gallery.ts.51bf3769.mjs","/src/pages/blog/size-oyle-geliyorsa-oyledir.mdx":"chunks/pages/size-oyle-geliyorsa-oyledir.mdx.348fbdc4.mjs","/src/pages/test.astro":"chunks/pages/test.astro.a4ed4e0c.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.bfba5db7.mjs","\u0000@astro-page:src/pages/gallery/index@_@astro":"chunks/index@_@astro.88a75827.mjs","\u0000@astro-page:src/pages/blog/size-oyle-geliyorsa-oyledir@_@mdx":"chunks/size-oyle-geliyorsa-oyledir@_@mdx.13b065b6.mjs","\u0000@astro-page:src/pages/blog/blog-altyapisi@_@mdx":"chunks/blog-altyapisi@_@mdx.a6e5c34f.mjs","\u0000@astro-page:src/pages/blog/category/[category]@_@astro":"chunks/_category_@_@astro.b629d1fc.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]@_@astro":"chunks/_tag_@_@astro.3097489d.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog@_@astro.9f4293bc.mjs","\u0000@astro-page:src/pages/test@_@astro":"chunks/test@_@astro.2fd962de.mjs","\u0000@astro-page:src/pages/api/gallery@_@ts":"chunks/gallery@_@ts.fc6aa2e0.mjs","/home/mert/_Development/my-codes/personal-blog/src/layouts/MdPostLayout.astro":"chunks/MdPostLayout.a5e176a7.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/coding.3d4a313c.svg","/_astro/avatar.5273d65c.webp","/_astro/blog-altyapisi.26c10f1f.css","/_astro/blog.e76709a0.css","/_astro/index.aeca8764.css","/favicon.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
