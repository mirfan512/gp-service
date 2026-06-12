import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/src/store/provider";
import { ToastProvider } from "@/src/components/ui/Toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "GP Consultations", template: "%s | GP Consultations" },
  description: "Speak to a GP Anytime, Anywhere",
  icons: {
    icon: "/icons/online-gp-services-logo.jpg",
  },
};

function ThemeInitScript() {
  const code = `
    (function () {
      try {
        const saved = localStorage.getItem("theme");
        const theme = saved || "light";
        document.documentElement.classList.toggle("dark", theme === "dark");
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
        <ThemeInitScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
