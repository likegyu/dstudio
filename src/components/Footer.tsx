import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className="bg-charcoal px-5 py-12">
      <div className="mx-auto max-w-[1200px] text-center">
        <p
          className="mb-4 text-lg text-text-on-dark"
          style={{ fontFamily: "var(--font-zilla-slab)" }}
        >
          dstudio
        </p>
        <p className="mb-4 text-sm text-text-muted">
          {dict.footer.tagline}
        </p>
        <a
          href={`/${locale}/privacy-policy`}
          className="mb-6 inline-block text-xs text-text-muted transition-colors duration-150 hover:text-text-on-dark"
        >
          {dict.footer.privacy}
        </a>
        <div className="mx-auto mb-6 h-px w-full bg-white/10" />
        <p className="text-xs tracking-[0.04em] text-text-muted">
          &copy; 2026 dstudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
