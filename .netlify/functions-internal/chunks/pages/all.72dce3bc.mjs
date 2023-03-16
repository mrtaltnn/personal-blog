/* empty css                          */import 'node:fs';
import 'node:fs/promises';
import 'node:url';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, A as AstroError, d as AstroErrorData, g as getImage, s as spreadAttributes, e as renderComponent, f as renderHead, h as renderSlot, i as getConfiguredImageService, j as createVNode, F as Fragment } from '../astro.b4db7f28.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                                   */
const $$Astro$h = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description, image = "/social_img.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/Head.astro");

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
  <div class="navbar">
    <div class="navbar-start">
      <label for="my-drawer" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl" href="/">Mert Altun 🫶</a>
    </div>
    <div class="navbar-end"></div>
  </div>
</div>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/Header.astro");

const $$Astro$f = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer footer-center block mb-5 pt-10">
  <div class="pb-2">
    &copy; ${today.getFullYear()} Mert Altun
  </div>
  <div class="inline opacity-75">
    <a href="https://mertaltun.com/" target="_blank" class="font-bold">Template</a> developed by
    <a href="https://mertaltun.github.io" target="_blank" class="font-bold">Mert Altun 🎭</a>
  </div>
</footer>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/Footer.astro");

const $$Astro$e = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(AstroErrorData.ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/home/mert/_Development/my-codes/personal-blog/node_modules/astro/components/Image.astro");

const avatar = {"src":"/_astro/avatar.02f6b492.webp","width":375,"height":500,"format":"webp"};

const $$Astro$d = createAstro();
const $$BlogMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BlogMenu;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blog/my-first-post.md": () => Promise.resolve().then(() => _page3)}), () => "../pages/blog/*.md");
  const nonDraftPosts = allPosts.filter((post) => !post.frontmatter.draft);
  const categories = [...new Set(nonDraftPosts.map((post) => post.frontmatter.category).flat())];
  return renderTemplate`${maybeRenderHead($$result)}<ul class="grow shrink px-4 my-2 ml-5">
    <li class="menu-title pt-4 -ml-5">
      <span>Blog</span>
    </li>
    <!-- <li class="link link-secondary pl-4 border-l"><a class="">Yazılım</a></li>
    <li class="link link-secondary pl-4 border-l"><a class="">Tiyatro</a></li>
    <li class="link link-secondary pl-4 border-l"><a class="">Diğer</a></li> -->
    ${categories.map((category) => renderTemplate`<li class="link link-secondary pl-4 border-l"><a${addAttribute(`/blog/category/${category}`, "href")}>${category}</a></li>`)}    
  </ul>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/BlogMenu.astro");

const $$Astro$c = createAstro();
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SideBar;
  return renderTemplate`${maybeRenderHead($$result)}<div class="drawer-side bg-base-200 rounded-r-box">
    <label for="my-drawer" class="drawer-overlay bg-base-200"></label>
    <div class="menu flex flex-col flex-nowrap p-4 overflow-y-auto w-[21rem] bg-base-200 text-base-content rounded-r-box">
      <div class="w-fit pt-10">
        <a href="/">
          <div class="avatar transition ease-in-out w-5/6 hover:scale-[102%] block m-auto mt-3 mb-6">
            <div>
              ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-squircle", "src": avatar.src, "width": avatar.width, "height": avatar.height, "alt": "mertaltun profile image" })}
            </div>
          </div>
        </a>
      </div>
      
      <ul class="shrink px-4 my-2">
        <li>
          <a href="/" class="font-caveat text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Ana Sayfa
          </a>
        </li>
        <li>
          <a href="mailto:mert@mertaltun.com" class="font-caveat text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
            </svg>
            
            İletişim
          </a>
        </li>
                <li>
          <a href="/gallery" class="font-caveat text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
            </svg>
            
            
            Fotoğrafladıklarım
          </a>
        </li>
        
      </ul> 

      ${renderComponent($$result, "BlogMenu", $$BlogMenu, {})}
      
      
      <div class="social-icons px-4 my-2 flex self-center">
        <a href="https://manuelernestog.github.io/paylink/" target="_blank" class="mx-3" aria-label="Support my work" title="Support my work">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"></path></svg>
        </a>
        <a href="https://github.com/manuelernestog" target="_blank" class="mx-3" aria-label="Github" title="Github">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/manuelernestog" target="_blank" class="mx-3" aria-label="Twitter" title="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/manuelernestogr" target="_blank" class="mx-3" aria-label="Linkedin" title="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
        </a>
  
        <a href="/rss.xml" target="_blank" class="mx-3" aria-label="RSS Feed" title="RSS Feed">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"></path><path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"></path><circle cx="6" cy="18" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>
    
  </div>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/SideBar.astro");

const SITE_TITLE = "Mert Altuns Personal Web app";
const SITE_DESCRIPTION = "My portfolio, blog, cv, resume website.";

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { image, title = SITE_TITLE, description = SITE_DESCRIPTION } = Astro2.props;
  return renderTemplate`<html lang="tr" data-theme="dracula">
	<head>
		${renderComponent($$result, "Head", $$Head, { "title": title, "description": description, "image": image })}
	${renderHead($$result)}</head>
	<body>
		<div class="gg-container-main"></div>
		<div class="bg-base-100 drawer drawer-mobile rounded-r-box">
			<input id="my-drawer" type="checkbox" class="drawer-toggle">
			<div class="drawer-content flex flex-col bg-base-100">
			  ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
			  <div class="md:flex md:justify-center">
				<!-- <main class="p-6 pt-10 max-w-[1024px]"> -->
				<main class="p-10 container max-w-6xl">
				  ${renderSlot($$result, $$slots["default"])}
				</main>
			  </div>
			  ${renderComponent($$result, "Footer", $$Footer, {})}
			</div>
			${renderComponent($$result, "SideBar", $$SideBar, {})}
		  </div>
	</body></html>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/layouts/Layout.astro");

const $$Astro$a = createAstro();
const $$CardItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CardItem;
  const { url, title, description, tags, pubDate, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
  <div class="card w-94 shadow-xl glass">
    <figure>
      <a${addAttribute(url, "href")}> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")}></a>
    </figure>
    <div class="card-body">
      <a${addAttribute(url, "href")}>
        <h2 class="card-title">
          ${title}
          <div class="badge badge-secondary">NEW</div>
        </h2>
      </a>

      <p>${description}</p>
      <div class="card-actions justify-end">
        ${tags.map((tag) => renderTemplate`<div class="badge badge-outline">       
          <a${addAttribute(`/blog/tag/${tag}`, "href")}>${tag}</a>
          </div>`)}
      </div>
    </div>
  </div>
</div>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/CardItem.astro");

const $$Astro$9 = createAstro();
const $$BlogCards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BlogCards;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blog/my-first-post.md": () => Promise.resolve().then(() => _page3)}), () => "../pages/blog/*.md");
  const nonDraftPosts = allPosts.filter((post) => !post.frontmatter.draft);
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-xl font-bold mb-5 mt-10">Latest from blog</div>

<div class="container">
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    ${nonDraftPosts.map((post) => renderTemplate`${renderComponent($$result, "CardItem", $$CardItem, { "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "tags": post.frontmatter.tags, "pubDate": post.frontmatter.pubDate, "image": post.frontmatter.image })}`)}
  </div>
</div>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/BlogCards.astro");

const codingSvg = {"src":"/_astro/coding.3d4a313c.svg","width":800,"height":800,"format":"svg"};

const $$Astro$8 = createAstro();
const $$ProfessionInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProfessionInfo;
  return renderTemplate`<!-- component -->${maybeRenderHead($$result)}<div class="container">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <text class="text-3xl font-caveat">
            Uzun zaman yazılım geliştirme ile ilgilendim, 6 yıl
            profesyonel olarak web teknolojileri ve api geliştirmeleri
            yaptım, son zamanlarda bu işi hobi haline getirdim, bunun
            dışında tiyatro ve müzik ile ilgileniyorum.
          </text>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <div class="group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8 rounded-lg">

            <div class="flex items-center gap-x-2">

              <img${addAttribute(codingSvg.src, "src")} class="aspect-[2/2] w-16" alt="coding">
              <div>
                <h3 class="text-xl font-bold text-gray-50"></h3>
                <span class="text-xs text-gray-300">İstanbul, Türkiye</span>
              </div>
            </div>
            <div class="my-4">
              <h3 class="text-2xl font-medium text-gray-200">
                FullStack Developer
              </h3>
              <div class="text-sm font-medium">
                <span class="m-1 ml-0 inline-block text-blue-500">HTML</span>
                <span class="m-1 ml-0 inline-block text-yellow-500">CSS</span>
                <span class="m-1 ml-0 inline-block text-pink-500">FIGMA</span>
                <span class="m-1 ml-0 inline-block text-lime-500">Ad. XD</span>
                <span class="m-1 ml-0 inline-block text-blue-500">Illustrator</span>
              </div>
              <!-- <div class="mt-2 text-sm text-gray-400">
                $60K - $100K per year
              </div> -->
            </div>
            <div class="flex items-center justify-end">
              <!-- <span class="text-sm font-medium text-gray-50"
                >Full Time</span
              > -->
              <a class="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80">Get CV</a>
            </div>
          </div>
        </div>
    </div>
  </div>`;
}, "/home/mert/_Development/my-codes/personal-blog/src/components/ProfessionInfo.astro");

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    <div class="pb-12 mt-5">
      <div class="text-xl py-1">Selam Herkese 👋</div>
      <div class="text-5xl font-bold">Ben Mert Altun</div>
      <div class="py-2">
      ${renderComponent($$result2, "ProfessionInfo", $$ProfessionInfo, {})}
      </div>
    </div>

    <div>
      ${renderComponent($$result2, "BlogCards", $$BlogCards, {})}
    </div>
  </main>` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/index.astro");

const $$file$5 = "/home/mert/_Development/my-codes/personal-blog/src/pages/index.astro";
const $$url$5 = "";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { pohotoDataList } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">\n  <!-- <div class="columns-3xs md:columns-xs lg:columns-md gap-4 space-y-4 p-8">  -->\n  ', `
</div>



<script>
  const root = document.querySelector("body, html");
  const container = document.querySelector(".gg-container-main");
  const images = document.querySelectorAll(".img-box > img");
  const l = images.length;

  for (var i = 0; i < l; i++) {
    images[i].addEventListener("click", function (i) {
      var currentImg = this;
      const parentItem = currentImg.parentElement,
        screenItem = document.createElement("div");
      screenItem.id = "gg-screen";
      container.prepend(screenItem);
      if (parentItem.hasAttribute("data-theme"))
        screenItem.setAttribute("data-theme", "dark");
      var route = currentImg.src;
      root.style.overflow = "hidden";
      screenItem.innerHTML =
        '<div class="gg-image"></div><div class="gg-close gg-btn rounded">\u2716\uFE0F</div><div class="gg-next gg-btn rounded">\u27A1\uFE0F</div><div class="gg-prev gg-btn rounded">\u2B05\uFE0F</div>';
      const first = images[0].src,
        last = images[l - 1].src;
      const imgItem = document.querySelector(".gg-image"),
        prevBtn = document.querySelector(".gg-prev"),
        nextBtn = document.querySelector(".gg-next"),
        close = document.querySelector(".gg-close");
      imgItem.innerHTML = '<img class="rounded-xl" src="' + route + '">';

      if (l > 1) {
        if (route == first) {
          prevBtn.hidden = true;
          var prevImg = false;
          var nextImg = currentImg.nextElementSibling;
        } else if (route == last) {
          nextBtn.hidden = true;
          var nextImg = false;
          var prevImg = currentImg.previousElementSibling;
        } else {
          var prevImg = currentImg.previousElementSibling;
          var nextImg = currentImg.nextElementSibling;
        }
      } else {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
      }

      screenItem.addEventListener("click", function (e) {
        if (e.target == this || e.target == close) hide();
      });

      root.addEventListener("keydown", function (e) {
        if (e.keyCode == 37 || e.keyCode == 38) prev();
        if (e.keyCode == 39 || e.keyCode == 40) next();
        if (e.keyCode == 27) hide();
      });

      prevBtn.addEventListener("click", prev);
      nextBtn.addEventListener("click", next);

      // Swipe Up / Down / Left / Right
      var swipeCont = document.querySelector(".gg-container-main");

      swipeCont.addEventListener("touchstart", startTouch, false);
      swipeCont.addEventListener("touchmove", moveTouch, false);

      var initialX = null;
      var initialY = null;

      function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
      }

      function moveTouch(e) {
        if (initialX === null) {
          return;
        }

        if (initialY === null) {
          return;
        }

        var currentX = e.touches[0].clientX;
        var currentY = e.touches[0].clientY;

        var diffX = initialX - currentX;
        var diffY = initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
          // sliding horizontally
          if (diffX > 0) {
            // swiped left
            next();
          } else {
            // swiped right
            prev();
          }
        } else {
          // sliding vertically
          if (diffY > 0) {
            // swiped up
            prev();
          } else {
            // swiped down
            next();
          }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
      }

      function prev() {
        var parentDiv = currentImg.previousSibling.parentElement;
        var previousImgDiv = parentDiv.previousElementSibling;
        prevImg = previousImgDiv.lastElementChild;
        imgItem.innerHTML = '<img src="' + prevImg.src + '">';
        currentImg = previousImgDiv.lastElementChild;
        var mainImg = document.querySelector(".gg-image > img").src;
        nextBtn.hidden = false;
        prevBtn.hidden = mainImg === first;
      }

      function next() {
        var parentDiv = currentImg.nextSibling.parentElement;
        var nextImgDiv = parentDiv.nextElementSibling;
        nextImg = nextImgDiv.lastElementChild;
        imgItem.innerHTML = '<img src="' + nextImg.src + '">';
        currentImg = nextImgDiv.lastElementChild;
        var mainImg = document.querySelector(".gg-image > img").src;
        prevBtn.hidden = false;
        nextBtn.hidden = mainImg === last;
      }

      function hide() {
        root.style.overflow = "auto";
        screenItem.remove();
      }
    });
  }
<\/script>`])), maybeRenderHead($$result), pohotoDataList.map((photo) => renderTemplate`<div${addAttribute(`h-min w-full rounded-xl img-box`, "class")}>
        <img class="h-full w-full object-cover rounded-xl"${addAttribute(photo.urls.regular, "src")}${addAttribute(photo.alt, "alt")}>
      </div>`));
}, "/home/mert/_Development/my-codes/personal-blog/src/components/gallery/Gallery.astro");

async function imageGalleryFetch(page) {
  const endpoint = `http://localhost:3000/api/gallery?page=${page}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
}

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  var result = await imageGalleryFetch(2);
  console.log(result);
  var data = result.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="text-5xl font-caveat"> Fotoğrafladıklarım</div>${renderComponent($$result2, "Gallery", $$Gallery, { "pohotoDataList": data })}` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/gallery/index.astro");

const $$file$4 = "/home/mert/_Development/my-codes/personal-blog/src/pages/gallery/index.astro";
const $$url$4 = "/gallery";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$MdPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MdPostLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": props.frontmatter.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="md:flex md:justify-center">
        <article class="prose prose-lg max-w-[750px] prose-img:mx-auto">
          ${props.frontmatter.image && renderTemplate`<img${addAttribute(props.frontmatter.image.url, "src")}${addAttribute(props.frontmatter.image.alt, "alt")} class="w-full mb-6">`}
          <h1 class="title my-2 text-4xl font-bold">${props.frontmatter.title}</h1>
          <!-- {pubDate && <time>{displayDate}</time>}
          {
            updatedDate && (
              <div>
                {" "}
                Last updated on <time>{updatedDate}</time>{" "}
              </div>
            )
          } -->
          <div class="divider my-2"></div>
          ${renderSlot($$result2, $$slots["default"])}
        </article>
      </main>` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/layouts/MdPostLayout.astro");

getConfiguredImageService();

				const html = "<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"layout":"../../layouts/MdPostLayout.astro","title":"My First Blog Post tit","description":"This is the first post of my new Astro blog.","tags":["astro","blogging","learning in public"],"category":"Diğer","pubDate":"2022-07-01T00:00:00.000Z","image":{"url":"https://source.unsplash.com/I1ASdgphUH4/800x599","alt":"The Astro logo with the word One."},"draft":false};
				const file = "/home/mert/_Development/my-codes/personal-blog/src/pages/blog/my-first-post.md";
				const url = "/blog/my-first-post";
				function rawContent() {
					return "\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MdPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const Astro$1 = $$Astro$3;
async function getStaticPaths$1() {
  const allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({"../my-first-post.md": () => Promise.resolve().then(() => _page3)}), () => "../*.md");
  const categories = [...new Set(allPosts.map((post) => post.frontmatter.category).flat())];
  return categories.map((category) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.category == category);
    return {
      params: { category },
      props: { posts: filteredPosts }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="navbar bg-base-200 rounded-box">
        <a class="btn btn-ghost normal-case text-xl">Kategor: ${category}</a>
      </div><div class="container">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CardItem", $$CardItem, { "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "tags": post.frontmatter.tags, "pubDate": post.frontmatter.pubDate, "image": post.frontmatter.image })}`)}
      </div>
    </div>` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/blog/category/[category].astro");

const $$file$3 = "/home/mert/_Development/my-codes/personal-blog/src/pages/blog/category/[category].astro";
const $$url$3 = "/blog/category/[category]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file$3,
	getStaticPaths: getStaticPaths$1,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const Astro = $$Astro$2;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../my-first-post.md": () => Promise.resolve().then(() => _page3)}), () => "../*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return tags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": tag }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="navbar bg-base-200 rounded-box">
        <a class="btn btn-ghost normal-case text-xl">Etiket: ${tag}</a>
      </div><div class="container">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CardItem", $$CardItem, { "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "tags": post.frontmatter.tags, "pubDate": post.frontmatter.pubDate, "image": post.frontmatter.image })}`)}
      </div>
    </div>` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/blog/tag/[tag].astro");

const $$file$2 = "/home/mert/_Development/my-codes/personal-blog/src/pages/blog/tag/[tag].astro";
const $$url$2 = "/blog/tag/[tag]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file$2,
	getStaticPaths,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>My Astro Learning Blog</h1><p>This is where I will post about my journey learning Astro.</p>${renderComponent($$result2, "BlogCards", $$BlogCards, {})}` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/blog.astro");

const $$file$1 = "/home/mert/_Development/my-codes/personal-blog/src/pages/blog.astro";
const $$url$1 = "/blog";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>Test Page</h1>` })}`;
}, "/home/mert/_Development/my-codes/personal-blog/src/pages/test.astro");

const $$file = "/home/mert/_Development/my-codes/personal-blog/src/pages/test.astro";
const $$url = "/test";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const get = async ({ params, request }) => {
  const id = params.page;
  console.log(id);
  console.log(params);
  var page = Number(params.page) || 1;
  const data = await getUnsplachUserPhotos(page);
  return new Response(JSON.stringify({
    data,
    message: "This was a GET!"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const all = ({ request }) => {
  return {
    body: JSON.stringify({
      message: `This was a ${request.method}!`
    })
  };
};
async function getUnsplachUserPhotos(page) {
  const endpoint = `${"https://api.unsplash.com"}/users/${"nGvj4cltdlajtJyjS8nQSngTb5JRySV_kb5m7PVJM58"}/photos/?client_id=${"nGvj4cltdlajtJyjS8nQSngTb5JRySV_kb5m7PVJM58"}&page=${page}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  var results = json.map(function(x) {
    return {
      id: x.id,
      description: x.description,
      alt: x.alt_description,
      width: x.width,
      height: x.height,
      color: x.color,
      blur_hash: x.blur_hash,
      urls: x.urls
    };
  });
  return results;
}

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	all,
	get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _, _page2 as a, _page3 as b, _page4 as c, _page5 as d, _page6 as e, _page7 as f, _page8 as g };
