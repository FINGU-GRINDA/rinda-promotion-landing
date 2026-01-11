import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rinda.ai"),
  title: "월 1억 더 버는 수출자동화 파이프라인 | 린다",
  description:
    "영어, 무역 몰라도 OK. 3주 만에 해외 바이어 50개사 확보하고 수출 시작하세요. 국내 시장의 한계를 넘어서는 유일한 방법.",
  keywords:
    "해외수출, 수출자동화, 바이어발굴, B2B영업, 해외영업, 콜드메일, 해외진출, 수출컨설팅, 린다, rinda",
  authors: [{ name: "Rinda.ai" }],
  creator: "Rinda.ai",
  publisher: "Rinda.ai",
  robots: "index, follow",
  openGraph: {
    title: "월 1억 더 버는 수출자동화 파이프라인 | 3주 완성",
    description:
      "영어, 무역 몰라도 OK. 3주 만에 해외 바이어 50개사 확보하고 수출 시작하세요. 국내 시장의 한계를 넘어서는 유일한 방법.",
    type: "website",
    locale: "ko_KR",
    url: "https://rinda.ai/go-global",
    siteName: "Rinda.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "월 1억 더 버는 수출자동화 파이프라인 - 3주 완성 프로그램",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "월 1억 더 버는 수출자동화 파이프라인 | 린다",
    description: "영어, 무역 몰라도 OK. 3주 만에 해외 바이어 50개사 확보.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "월 1억 더 버는 수출자동화 파이프라인 만들기",
              description:
                "3주 만에 해외 바이어 50개사 확보. 린다와 함께 바이어 발굴부터 콜드메일 발송까지 직접 실행하며 배우는 수출 액셀러레이팅 프로그램.",
              provider: {
                "@type": "Organization",
                name: "Rinda.ai",
                url: "https://rinda.ai",
              },
              offers: {
                "@type": "Offer",
                price: "205000",
                priceCurrency: "KRW",
                availability: "https://schema.org/LimitedAvailability",
                validFrom: "2025-01-13",
                validThrough: "2025-01-31",
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                startDate: "2025-02-07",
                endDate: "2025-02-21",
                instructor: {
                  "@type": "Person",
                  name: "박준영",
                  jobTitle: "린다 시니어 컨설턴트",
                },
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-black text-n-white selection:bg-primary/20">
        {/* Background Effects */}
        <div className="fixed inset-0 z-[-1] bg-aurora bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Mobile Container wrapper */}
        <div className="flex justify-center min-h-screen">
          <div className="w-full max-w-[480px] bg-n-black min-h-screen shadow-2xl relative flex flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
