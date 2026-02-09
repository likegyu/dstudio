import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Zilla_Slab } from "next/font/google";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import "../globals.css";

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  display: "swap",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: ["dstudio", "to dot", "습관 히트맵", "습관 캘린더", "일상 기록", "라이프로깅", "앱 개발", "습관 추적"],
    authors: [{ name: "dstudio" }],
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: "https://dstudio.kr",
      siteName: "dstudio",
      locale: locale === "ko" ? "ko_KR" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/fonts-archive/NanumSquareRound/NanumSquareRound.css"
        />
      </head>
      <body className={`${zillaSlab.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
