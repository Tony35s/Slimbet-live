"use client";
import { useState } from "react";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const ADMIN_PASS = "Slimbet2024!";

  if (!auth) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ border: "2px solid gold", padding: 30, borderRadius: 15, background: "#111", width: 300 }}>
          <h1 style={{ color: "gold", textAlign: "center", fontSize: 20 }}>ADMIN SLIMBET PRO</h1>
          <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} style={{ width: "100%", padding: 12, marginTop: 20, background: "#000", color: "#fff", border: "1px solid #333" }} />
          <button onClick={() => { if(pass===ADMIN_PASS) setAuth(true); else alert("Password errata"); }} style={{ width: "100%", marginTop: 15, padding: 12, background: "gold", fontWeight: "bold" }}>ENTRA</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: 20, color: "#fff" }}>
      <h1 style={{ color: "gold" }}>ADMIN OK - FUNZIONA!</h1>
      <p style={{ marginTop: 20 }}>Ora collega Supabase. Dimmi come si chiama la tua tabella utenti (users? profiles?)</p>
      <a href="/" style={{ color: "gold", display: "block", marginTop: 20 }}>Torna al sito</a>
    </div>
  );
}
