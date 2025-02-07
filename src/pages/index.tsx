import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWallet } from "@meshsdk/react";
import { CardanoWallet } from "@meshsdk/react";

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  async function getWalletAddress() {
    if (wallet) {
      const addresses = await wallet.getUsedAddresses();
      if (addresses.length > 0) {
        setWalletAddress(addresses[0]); // Lấy địa chỉ đầu tiên
      }
    }
  }

  useEffect(() => {
    if (connected) {
      getWalletAddress();
    }
  }, [connected]);

  return (
    <div>
      <head>
        <title>Gamefi</title>
        <meta name="description" content="Connect and interact with Cardano Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
      <nav className="navbar">

       
          <img src="/logo.svg" alt="logo" />
          <h1>Bruhtato</h1>
        
        <div className={`navbar-left ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">BRIDGE</a></li>
            <li><a href="#">MARKETPLACE</a></li>
          </ul>
        </div>
        
        <div className="navbar-right flex items-center space-x-4">
          {/* Hiển thị địa chỉ ví nếu đã kết nối */}
          {connected && walletAddress && (
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-lg">
              {walletAddress.slice(0, 6) + "..." + walletAddress.slice(-6)}
            </span>
          )}

          {/* Nút Connect Wallet */}
          <CardanoWallet label="Connect Wallet" isDark={true} />
        </div>
      </nav>

      {connected && (
        <>
          {assets ? (
            <pre>
              <code className="language-js">{JSON.stringify(assets, null, 2)}</code>
            </pre>
          ) : (
            <button
              type="button"
              onClick={() => getAssets()}
              disabled={loading}
              style={{
                margin: "8px",
                backgroundColor: loading ? "orange" : "grey",
              }}
            >
              
            </button>
          )}
        </>
      )}


        {/* Contact Section */}
        <section className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">&copy; 2025 Cardano Wallet Integration. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy-policy" className="footer-link">Privacy Policy</a>
              <span className="footer-separator">|</span>
              <a href="#terms-of-service" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Home;
