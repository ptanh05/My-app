
import { useState, useEffect } from "react"
import type { NextPage } from "next"
import { useWallet, CardanoWallet } from "@meshsdk/react"
import Head from "next/head"
import Image from "next/image"
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="main-container">
    {/* Hero Section */}
    <section className="hero-section">
      <h2 className="hero-title">Welcome to Brutato Games</h2>
      <p className="hero-subtitle">Experience the future of gaming on the Cardano blockchain</p>
      <button className="cta-button">Start Playing Now</button>
    </section>

    {/* Features Section */}
    <section className="features-section">
      <div className="feature-card">
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        </div>
        <h3 className="feature-title">Immersive Gameplay</h3>
        <p className="feature-description">
          Dive into stunning worlds with captivating storylines and challenging quests.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="feature-title">Play-to-Earn</h3>
        <p className="feature-description">
          Earn real value while you play. Your skills translate to tangible rewards.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <h3 className="feature-title">Vibrant Community</h3>
        <p className="feature-description">
          Join thousands of players in a thriving ecosystem of gamers and creators.
        </p>
      </div>
    </section>
  </main>
  );
};

export default MainContent;
