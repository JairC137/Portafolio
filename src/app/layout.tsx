import "./globals.css";
import { Poppins } from "next/font/google";
import ClientLayout from "./client-layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Jair Olmos | Portafolio",
  description: "Consultor de tecnología, especializado en soluciones basadas en datos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

