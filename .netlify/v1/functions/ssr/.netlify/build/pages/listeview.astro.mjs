import { e as createComponent, r as renderTemplate, h as addAttribute, k as renderHead } from '../chunks/astro/server_DpQkIPYc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Listeview = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    "https://mannrjkznhzfmztfhcxj.supabase.co/rest/v1/Marathon_apparel?select=*",
    {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbm5yamt6bmh6Zm16dGZoY3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTE3MTgsImV4cCI6MjA2MzIyNzcxOH0.OO4UXTKIzTWRysicFvCx3ERENDBZ-pBl1vuT8AY-yVg",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbm5yamt6bmh6Zm16dGZoY3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTE3MTgsImV4cCI6MjA2MzIyNzcxOH0.OO4UXTKIzTWRysicFvCx3ERENDBZ-pBl1vuT8AY-yVg"
      }
    }
  );
  let products = await response.json();
  products = products.filter((p) => p.primary === true);
  if (!Array.isArray(products)) {
    products = [];
  }
  {
    console.log(products);
  }
  return renderTemplate(_a || (_a = __template(['<html lang="da"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Listevisning</title><link rel="stylesheet" href="/listeview.css"><link rel="stylesheet" href="/src/styles/style.css">', `</head> <body> <!-- HEADER --> <header class="site-header"> <nav class="site-nav"> <div class="nav-left"> <img src="/images/menu-sort.webp" alt="Menu" id="menuToggle" class="burger"> <img src="/images/s\xF8g-sort.webp" alt="S\xF8g" class="s\xF8g-icon"> </div> <div class="nav-logo"> <a href="/"> <img src="/images/logo.webp" alt="Planet Nusa Logo"> </a> </div> <div class="nav-center"> <a href="/marathon">Marathon Week</a> <a href="/listeview">Apparel</a> <a href="/nusabootcamp">Nusa Bootcamp</a> <a href="/nusaruns">Nusa Runs</a> <a href="/nusaswims">Nusa Swims</a> <a href="/nusatalks">Nusa Talks</a> </div> <div class="nav-right"> <img src="/images/s\xF8g-sort.webp" alt="S\xF8g" class="s\xF8g-desktop"> <img src="/images/profil-sort.webp" alt="Profil"> <img src="/images/kurv-sort.webp" alt="Kurv"> </div> </nav> <div class="mobile-menu" id="mobileMenu"> <ul> <li><a href="/marathon">Marathon Week</a></li> <li><a href="/listeview">Apparel</a></li> <li><a href="/nusabootcamp">Nusa Bootcamp</a></li> <li><a href="/nusaruns">Nusa Runs</a></li> <li><a href="/nusaswims">Nusa Swims</a></li> <li><a href="/nusatalks">Nusa Talks</a></li> </ul> </div> <script>
        setTimeout(() => {
          const toggle = document.getElementById("menuToggle");
          const menu = document.getElementById("mobileMenu");

          if (toggle && menu) {
            toggle.addEventListener("click", () => {
              menu.classList.toggle("open");
            });
          }
        }, 0);
      <\/script> </header> <!-- MAIN --> <main class="main-listeview"> <section class="product-section"> <div class="product-header"> <h1>MARATHON APPAREL</h1> <p class="header-p">
Discover Planet Nusa\u2019s full range of women\u2019s, men's and unisex
            clothes and accesories for every workout & daily routine \u{1FA90} It\u2019s
            made to move with you!
</p> </div> <div class="product-grid"> `, ` </div> </section> </main> <!-- FOOTER --> <footer class="footer-wrapper"> <div class="footer-content"> <div class="footer-top"> <h2>
Community Driven Sportswear
<img src="/images/planet-sort.webp" alt="planet"> </h2> <section class="footer-grid"> <div class="footer-left"> <h3>Don't Ever Miss Out</h3> <p>
Be the first to know about new drops and special offers. Sign up
                here and get 10% off your first order!
</p> <input type="email" placeholder="email@newsletter.com"> <br> <select> <option>Select your country</option> <option>Canada</option> <option>Denmark</option> <option>France</option> <option>Germany</option> <option>Japan</option> <option>Netherlands</option> <option>Singapore</option> <option>South Korea</option> <option>Sweden</option> <option>Switzerland</option> </select> </div> <div class="footer-right"> <div class="footer-links"> <div> <h4>Marathon Week</h4> <ul> <li><a href="/marathon">Breathwork & Bubbles</a></li> <li><a href="/marathon">Nusa run + DJ Loadi</a></li> <li><a href="/marathon">Shake out run</a></li> <li><a href="/marathon">Nusa cheer zone</a></li> </ul> </div> <div> <h4>Apparel</h4> <ul> <li><a href="/listeview">Women</a></li> <li><a href="/listeview">Men</a></li> <li><a href="/listeview">Unisex</a></li> </ul> </div> <div> <h4>Events</h4> <ul> <li><a href="/nusabootcamp">Nusa Bootcamp</a></li> <li><a href="/nusaruns">Nusa Runs</a></li> <li><a href="/nusaswims">Nusa Swims</a></li> <li><a href="/nusatalks">Nusa Talks</a></li> </ul> </div> </div> </div> </section> </div> <div class="footer-bottom"> <div class="socials"> <a href="#"><img src="/images/facebook-sort.webp" alt="Facebook"></a> <a href="#"><img src="/images/instagram-sort.webp" alt="Instagram"></a> </div> </div> </div> </footer> </body></html>`])), renderHead(), products.map((product) => renderTemplate`<a${addAttribute(`/singleview?id=${product.id}`, "href")} class="product-card"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")}> <p>${product.name}</p> <span>${product.price} DKK</span> </a>`));
}, "/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/listeview.astro", void 0);

const $$file = "/Users/anjadavidovic/kea/2sem/TEMA10-eksamen/team10-planetnusa/src/pages/listeview.astro";
const $$url = "/listeview";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Listeview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
