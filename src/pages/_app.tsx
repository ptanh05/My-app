import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/content.css";
import "../styles/market.css"
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { useRouter } from "next/router";
import Footer from "../components/footer"; // Import Footer vào
import MainContent from "../components/content";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); // Lấy thông tin route hiện tại

  return (
    <MeshProvider>
      <div className="app-container">
        <Component {...pageProps} />
        
        {/* Chỉ hiển thị MainContent trên trang chủ */}
        {router.pathname === "/" && <MainContent />}

        <Footer />
      </div>
    </MeshProvider>
  );
}

export default MyApp;
