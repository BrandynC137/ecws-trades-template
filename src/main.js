import "./style.css";
import Navigo from "navigo";
import { navbar } from "./components/navbar";
import { hero } from "./sections/hero";
import { about } from "./sections/about";
import { services } from "./sections/services";
import { contact } from "./sections/contact";
import { footer } from "./components/footer";
import { gallery } from "./pages/gallery";
import { notfound } from "./pages/notfound";
import { contactPage } from "./pages/contactPage"
import {
  createIcons,
  Handshake,
  Zap,
  Home,
  Clipboard,
  ChartNetwork,
  Shield,
  BadgeCheck,
  Phone,
  Mail,
  Clock
} from "lucide";

const router = new Navigo('/', { hash: false });
const app = document.getElementById('app');


document.querySelector("#navbar").innerHTML = navbar();

router.on('/', () =>  {
  app.innerHTML =  [
    hero(),
    about(),
    services(),
    contact(),
  ].join("");
})
.on('/gallery', () => {
  app.innerHTML = gallery();
})
.on('/contact', () => {
  app.innerHTML = contactPage();
})
.notFound(() => {
  app.innerHTML = notfound();
})
.resolve();

document.querySelector("#footer").innerHTML = footer();

createIcons({
  icons: {
    Handshake,
    Zap,
    Home,
    Clipboard,
    ChartNetwork,
    Shield,
    BadgeCheck,
    Phone,
    Mail,
    Clock
  },
});
