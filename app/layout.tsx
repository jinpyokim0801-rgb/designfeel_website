import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "designfeel.studio",
  description: "아이의 그림과 가족의 이야기를 단 하나의 회화 작품과 아카이브로 남기는 디자인필.",
  icons: {
    icon: "/favicon-taegeuk.png?v=1",
    shortcut: "/favicon-taegeuk.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
