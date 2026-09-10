import { ArrowRight, ArrowUpRight, Broom, CalendarCheck, ChartBar, Check, CheckCircle, Envelope, Flask, Info, MapPin, Phone, ShieldCheck, ShoppingBag, Star, Waves, Wrench, Lightning, Stack, Plugs, House, UserCircle, PaperPlaneTilt, X, List, Pause, Play } from "@phosphor-icons/react/dist/ssr";

const icons = {
  arrow_forward: ArrowRight, arrow_outward: ArrowUpRight, cleaning_services: Broom,
  science: Flask, construction: Wrench, shopping_bag: ShoppingBag,
  verified_user: ShieldCheck, health_and_safety: ShieldCheck, calendar_month: CalendarCheck,
  analytics: ChartBar, check: Check, check_circle: CheckCircle, task_alt: CheckCircle,
  phone: Phone, mail: Envelope, location_on: MapPin, star: Star, water: Waves,
  info: Info, bolt: Lightning, layers: Stack, settings_input_hdmi: Plugs,
  home_repair_service: House, account_circle: UserCircle, storefront: House,
  send: PaperPlaneTilt, close: X, menu: List, pause: Pause, play: Play,
};

export default function Icon({ name, className = "", size = 22 }: { name: string; className?: string; size?: number }) {
  const Glyph = icons[name as keyof typeof icons] ?? Waves;
  return <Glyph size={size} weight={name === "star" ? "fill" : "regular"} className={`icon ${className}`} aria-hidden="true" />;
}
