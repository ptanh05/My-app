import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from "@meshsdk/react";
import { CardanoWallet } from "@meshsdk/react";

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false); // Thêm state cho menu

  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  return (
    <div>
      <head>
        <title>Gamefi</title>
        <meta name="description" content="Connect and interact with Cardano Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
<<<<<<< HEAD
        <nav className="navbar">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div className={`navbar-left ${menuOpen ? "open" : ""}`}>
            <ul className="navbar-links">
              <li><a href="#">INVENTORY</a></li>
              <li><a href="#">BRIDGE</a></li>
              <li><a href="#">MARKETPLACE</a></li>
              <li><a href="#">MERCH STORE</a></li>
              <li><a href="#">MY PROFILE</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <CardanoWallet label="Connect Wallet" isDark={true} />
          </div>
        </nav>
=======
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <h1>Gamefi</h1>
            <nav className="header-nav">
              <a href="#home" className="header-link">Home</a>
              <a href="#about" className="header-link">About</a>
              <a href="#services" className="header-link">Services</a>
              <a href="#contact" className="header-link">Contact</a>
            </nav>
          </div>
        </header>

        <div className="custom-wrapper1">
          <h1>Connect Wallet</h1><br />
          <CardanoWallet label="Connect Wallet" isDark={true} />
        </div>
>>>>>>> ffe80cb6f534e30146ec16c449b22ac4cf4b493c

        {connected && (
          <>
            <h1>Get Wallet Assets</h1>
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
                Get Wallet Assets
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
<<<<<<< HEAD
export default Home;
=======

export default Home;
>>>>>>> ffe80cb6f534e30146ec16c449b22ac4cf4b493c
