import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Home component: displays welcome message, links to Amazon/Walmart/eBay, and a product search box.
 * The search opens all three sites in new tabs with the product search term.
 * Styled for the existing modern, dark theme using the project's primary/accent colors.
 */
function Home() {
  const [search, setSearch] = useState('');

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const encoded = encodeURIComponent(search);
    const urls = [
      `https://www.amazon.com/s?k=${encoded}`,
      `https://www.walmart.com/search/?query=${encoded}`,
      `https://www.ebay.com/sch/i.html?_nkw=${encoded}`
    ];
    urls.forEach(url => window.open(url, "_blank", "noopener,noreferrer"));
  };

  return (
    <div style={{
      minHeight: "76vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "none"
    }}>
      <div
        style={{
          background: "var(--bg-secondary, #282c34)",
          borderRadius: 16,
          boxShadow: "0 8px 40px 8px rgba(25,118,210,0.11),0 0.5px 4px rgba(66,66,66,0.11)",
          border: "1.5px solid var(--login-secondary, #424242)",
          maxWidth: 450,
          width: "98vw",
          padding: "2.3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem"
        }}
      >
        <h2
          style={{
            color: "var(--login-primary, #1976d2)",
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: ".05rem",
            fontSize: "2.03rem",
            margin: 0
          }}
        >
          Home
        </h2>
        <div
          style={{
            marginBottom: "0.7rem",
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center"
          }}
        >
          <a
            href="https://www.amazon.com/"
            className="market-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--login-accent, #e91e63)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.14rem"
            }}
          >
            Amazon
          </a>
          <a
            href="https://www.walmart.com/"
            className="market-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--login-accent, #e91e63)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.14rem"
            }}
          >
            Walmart
          </a>
          <a
            href="https://www.ebay.com/"
            className="market-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--login-accent, #e91e63)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.14rem"
            }}
          >
            eBay
          </a>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: 350,
            gap: 8,
            marginBottom: 0,
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1,
              background: "var(--login-secondary, #424242)",
              border: "1.5px solid var(--login-border,#1976d2)",
              borderRadius: 7,
              color: "#fff",
              padding: "0.78rem 11px",
              fontSize: "1.05rem",
              outline: "none",
              fontWeight: 400,
              transition: "border 0.2s",
              caretColor: "var(--login-accent,#e91e63)",
            }}
            className="home-search-input"
            aria-label="Product search"
          />
          <button
            type="submit"
            className="market-search-btn"
            style={{
              background: "var(--login-primary, #1976d2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.72rem 1.23rem",
              fontSize: "1.05rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(25,118,210,0.08)",
              transition: "background 0.17s, transform 0.13s"
            }}
          >
            <span role="img" aria-label="search">🔎</span>
            &nbsp;Search
          </button>
        </form>
        <div style={{ fontSize: 14, color: "var(--login-label,#e0e0e0)", opacity: 0.7 }}>
          Enter a product to search on Amazon, Walmart, and eBay. All results will open in new tabs.
        </div>
      </div>
    </div>
  );
}

export default Home;
