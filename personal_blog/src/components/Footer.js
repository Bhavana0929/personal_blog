import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#171a2b",
      color: "#b0b0b0",
      textAlign: "center",
      padding: "16px 0",
      marginTop: "32px"
    }}>
      &copy; {new Date().getFullYear()} Bhavana Marreddy. All rights reserved.
    </footer>
  );
}
