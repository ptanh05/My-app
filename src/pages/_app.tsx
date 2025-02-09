import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/content.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import Footer from "../components/footer"; // Import Footer vào
import MainContent from "../components/content";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <div className="app-container">
        <Component {...pageProps} />
        <MainContent />
        <Footer /> {/* Thêm Footer vào đây */}
      </div>
    </MeshProvider>
  );
}

export default MyApp;
