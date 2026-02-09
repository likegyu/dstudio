import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dstudio - 매일의 기록을 디자인합니다",
  description:
    "dstudio는 일상을 기록하는 경험을 더 따뜻하고 의미 있게 만들어가는 앱 개발 스튜디오입니다. 라이프로깅 앱 to dot을 만듭니다.",
  keywords: ["dstudio", "to dot", "습관 히트맵", "습관 캘린더", "일상 기록", "라이프로깅", "앱 개발", "습관 추적"],
  authors: [{ name: "dstudio" }],
  openGraph: {
    title: "dstudio - 매일의 기록을 디자인합니다",
    description:
      "일상을 기록하는 경험을 더 따뜻하고 의미 있게 만들어가는 앱 개발 스튜디오",
    url: "https://dstudio.kr",
    siteName: "dstudio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dstudio - 매일의 기록을 디자인합니다",
    description:
      "일상을 기록하는 경험을 더 따뜻하고 의미 있게 만들어가는 앱 개발 스튜디오",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
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
