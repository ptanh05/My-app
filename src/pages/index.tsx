"use client"

import { useState, useEffect } from "react"
import type { NextPage } from "next"
import { useWallet, CardanoWallet } from "@meshsdk/react"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  const { connected, wallet } = useWallet()
  const [assets, setAssets] = useState<null | any>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState(false)

  async function getAssets() {
    if (wallet) {
      setLoading(true)
      try {
        const _assets = await wallet.getAssets()
        setAssets(_assets)
      } catch (error) {
        console.error("Error fetching assets:", error)
      } finally {
        setLoading(false)
      }
    }
  }

  async function getWalletAddress() {
    if (wallet) {
      try {
        const addresses = await wallet.getUsedAddresses()
        if (addresses.length > 0) {
          setWalletAddress(addresses[0])
        }
      } catch (error) {
        console.error("Error fetching wallet address:", error)
      }
    }
  }

  useEffect(() => {
    if (connected) {
      getWalletAddress()
    }
  }, [connected, wallet]) // Fixed: Added wallet to dependencies

  return (
    <>
      <Head>
        <title>Brutato Games - Epic Cardano Gaming Experience</title>
        <meta
          name="description"
          content="Dive into the world of Brutato Games, where Cardano blockchain meets epic gaming adventures. Connect your wallet and start your journey now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo/brutato.png" alt="Brutato Logo" width={100} height={50} />
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-md">
                Brutato Games
              </h1>
            </div>

            <div className={`hidden md:flex space-x-6 ${menuOpen ? "block" : "hidden"}`}>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                HOME
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                GAMES
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                MARKETPLACE
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                COMMUNITY
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {connected && walletAddress && (
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {walletAddress.slice(0, 6) + "..." + walletAddress.slice(-6)}
                </span>
              )}
              <CardanoWallet label="Connect Wallet" />
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-xl mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Brutato Games</h2>
            <p className="text-xl mb-8">Experience the future of gaming on the Cardano blockchain</p>
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transform hover:scale-105 transition-all">
              Start Playing Now
            </button>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Immersive Gameplay</h3>
              <p className="text-gray-600">
                Dive into stunning worlds with captivating storylines and challenging quests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Play-to-Earn</h3>
              <p className="text-gray-600">
                Earn real value while you play. Your skills translate to tangible rewards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
              <p className="text-gray-600">Join thousands of players in a thriving ecosystem of gamers and creators.</p>
            </div>
          </section>

          {/* Wallet Connection Section */}
          {connected && (
            <div className="bg-white rounded-lg shadow-lg mt-8">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Your Brutato Assets</h3>
                {assets ? (
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">{JSON.stringify(assets, null, 2)}</code>
                  </pre>
                ) : (
                  <button
                    onClick={getAssets}
                    disabled={loading}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Loading Assets...
                      </span>
                    ) : (
                      "Get Your Game Assets"
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </main>

        <footer className="bg-gray-800 text-white mt-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 Brutato Games. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#privacy-policy" className="text-sm hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="text-sm hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home

