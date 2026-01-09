import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen min-w-full container py-6 mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
