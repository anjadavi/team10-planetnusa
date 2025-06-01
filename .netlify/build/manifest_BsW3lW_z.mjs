import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DpQkIPYc.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/","cacheDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/node_modules/.astro/","outDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/dist/","srcDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/","publicDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/public/","buildClientDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/dist/","buildServerDir":"file:///Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/listeview","isIndex":false,"type":"page","pattern":"^\\/listeview\\/?$","segments":[[{"content":"listeview","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/listeview.astro","pathname":"/listeview","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/marathon","isIndex":false,"type":"page","pattern":"^\\/marathon\\/?$","segments":[[{"content":"marathon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/marathon.astro","pathname":"/marathon","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nusabootcamp","isIndex":false,"type":"page","pattern":"^\\/nusabootcamp\\/?$","segments":[[{"content":"nusabootcamp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nusabootcamp.astro","pathname":"/nusabootcamp","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nusaruns","isIndex":false,"type":"page","pattern":"^\\/nusaruns\\/?$","segments":[[{"content":"nusaruns","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nusaruns.astro","pathname":"/nusaruns","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nusaswims","isIndex":false,"type":"page","pattern":"^\\/nusaswims\\/?$","segments":[[{"content":"nusaswims","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nusaswims.astro","pathname":"/nusaswims","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nusatalks","isIndex":false,"type":"page","pattern":"^\\/nusatalks\\/?$","segments":[[{"content":"nusatalks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nusatalks.astro","pathname":"/nusatalks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/singleview.Chak_UBq.css"}],"routeData":{"route":"/singleview","isIndex":false,"type":"page","pattern":"^\\/singleview\\/?$","segments":[[{"content":"singleview","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/singleview.astro","pathname":"/singleview","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/listeview.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/marathon.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/nusabootcamp.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/nusaruns.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/nusaswims.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/nusatalks.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/singleview.astro",{"propagation":"none","containsHead":true}],["/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/listeview@_@astro":"pages/listeview.astro.mjs","\u0000@astro-page:src/pages/marathon@_@astro":"pages/marathon.astro.mjs","\u0000@astro-page:src/pages/nusabootcamp@_@astro":"pages/nusabootcamp.astro.mjs","\u0000@astro-page:src/pages/nusaruns@_@astro":"pages/nusaruns.astro.mjs","\u0000@astro-page:src/pages/nusaswims@_@astro":"pages/nusaswims.astro.mjs","\u0000@astro-page:src/pages/nusatalks@_@astro":"pages/nusatalks.astro.mjs","\u0000@astro-page:src/pages/singleview@_@astro":"pages/singleview.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BsW3lW_z.mjs","/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BnkNq2A5.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/singleview.Chak_UBq.css","/events.css","/favicon.svg","/index.css","/karrusel10.webp","/karrusel11.webp","/karrusel6.webp","/karrusel7.webp","/karrusel8.webp","/karrusel9.webp","/listeview.css","/marathon.css","/pil.png","/scroll.js","/fonts/FuturaCyrillicBold.ttf","/fonts/FuturaCyrillicBook.ttf","/fonts/FuturaCyrillicDemi.ttf","/fonts/FuturaCyrillicExtraBold.ttf","/fonts/FuturaCyrillicHeavy.ttf","/fonts/FuturaCyrillicLight.ttf","/fonts/FuturaCyrillicMedium.ttf","/images/bootcampa.webp","/images/bootcampaa.webp","/images/bootcampc.webp","/images/bootcampo.webp","/images/drikkevarer.webp","/images/electrolyte.webp","/images/facebook-sort.webp","/images/far.webp","/images/forsidebillede.webp","/images/gronplanet.webp","/images/hero-marathon.webp","/images/hero-marathon2.webp","/images/instagram-sort.webp","/images/karrusel1.webp","/images/karrusel10.webp","/images/karrusel11.webp","/images/karrusel2.webp","/images/karrusel3.webp","/images/karrusel4.webp","/images/karrusel5.webp","/images/karrusel6.webp","/images/karrusel7.webp","/images/karrusel8.webp","/images/karrusel9.webp","/images/kurv-sort.webp","/images/lillekrusedulle.svg","/images/linje.webp","/images/logo.webp","/images/menu-sort.webp","/images/nusa-runs.webp","/images/nusa-talks.webp","/images/nusabootcamp.webp","/images/nusabootcamphero.webp","/images/nusaruns.webp","/images/nusaswims.webp","/images/nusaswimshero.webp","/images/nusatalks.webp","/images/nusatalks1.png","/images/nusatalks2.png","/images/nusayoga.webp","/images/pause.webp","/images/pigerne.webp","/images/pil.webp","/images/planet-grøn.webp","/images/planet-sort.webp","/images/planethvid.svg","/images/planetorange.svg","/images/profil-sort.webp","/images/raalborg.webp","/images/raarhus.webp","/images/rcopenhagen.webp","/images/rnewyork.webp","/images/rodense.webp","/images/storkrusedulle.svg","/images/strava.webp","/images/swimsa.webp","/images/swimsc.webp","/images/swimso.webp","/images/søg-sort.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Ic6ODOhdDtM1vlwcS+rE/D5t4R8U9p1q1hTK6UtjwGo=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
