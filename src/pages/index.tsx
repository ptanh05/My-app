import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
        <title>Cardano Wallet Integration</title>
        <meta name="description" content="Connect and interact with Cardano Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <div className="custom-wrapper1">
          <h1>Connect Wallet</h1><br />
          <CardanoWallet label="Connect Wallet" isDark={true} />
        </div>

        {connected && (
          <>
            <h1>Get Wallet Assets</h1>
            {assets ? (
              <pre>
                <code className="language-js">
                  {JSON.stringify(assets, null, 2)}
                </code>
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

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Cardano Wallet Integration. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="#terms-of-service" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </footer>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Contact Us</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </body>
    </div>
  );
};

export default Home;
