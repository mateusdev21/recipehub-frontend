import { Toaster } from "react-hot-toast";
import Providers from "@/app/providers";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <Providers>
          <Toaster position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
