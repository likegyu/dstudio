export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12">
      <div className="mx-auto max-w-[1200px] text-center">
        <p
          className="mb-4 text-lg text-text-on-dark"
          style={{ fontFamily: "var(--font-zilla-slab)" }}
        >
          dstudio
        </p>
        <p className="mb-6 text-sm text-text-muted">
          매일의 기록을 디자인합니다
        </p>
        <div className="mx-auto mb-6 h-px w-full bg-white/10" />
        <p className="text-xs tracking-[0.04em] text-text-muted">
          &copy; 2026 dstudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
