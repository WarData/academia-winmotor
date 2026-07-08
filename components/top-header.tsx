import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <header className="wm-header">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 md:px-6">
  <Link href="/" className="wm-brand">
    ...
  </Link>

  <div className="ml-auto">
    <Badge>Formación oficial</Badge>
  </div>
</div>
        <Link href="/" className="wm-brand">
          <Image
  src="/Winmotor-Y-MS-v2.jpg"
  alt="Winmotor Y-MS"
  width={340}
  height={80}
  className="wm-brand-logo"
  priority
/>
          <div className="wm-brand-text">
            <span className="wm-brand-title">Winmotor Y-MS</span>
            <span className="wm-brand-academy">Academy</span>
          </div>
        </Link>

        <div className="wm-logo-badge">Formación oficial</div>
      </div>
    </header>
  );
}
