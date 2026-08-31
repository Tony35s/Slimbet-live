"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase"; // cambia path se serve

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const ADMIN_PASS = "Slimbet2024!"; // CAMBIA QUESTA

  const login = () => {
    if (pass === ADMIN_PASS) setAuth(true);
    else alert("Password errata");
  };

  useEffect(() => {
    if (!auth) return;
    const fetchUsers = async () => {
      const { data } = await supabase.from("users").select("*").order("created_at", { ascending: false });
      if (data) setUsers(data);
    };
    fetchUsers();
  }, [auth]);

  const recharge = async (id: string, amount: number) => {
    const newBal = prompt(`Quanto vuoi ricaricare per questo utente?`);
    if (!newBal) return;
    const { error } = await supabase.from("users").update({ balance: Number(newBal) }).eq("id", id);
    if (!error) {
      alert(`Ricaricato ${newBal}€!`);
      window.location.reload();
    }
  };

  if (!auth) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ border: "2px solid gold", padding: 30, borderRadius: 15, background: "#111" }}>
          <h1 style={{ color: "gold", textAlign: "center" }}>ADMIN SLIMBET PRO</h1>
          <input type="password" placeholder="Password Admin" value={pass} onChange={e => setPass(e.target.value)} style={{ width: "100%", padding: 12, marginTop: 20, background: "#000", color: "#fff", border: "1px solid #333" }} />
          <button onClick={login} style={{ width: "100%", marginTop: 15, padding: 12, background: "gold", fontWeight: "bold" }}>ENTRA</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: 20, color: "#fff" }}>
      <h1 style={{ color: "gold" }}>DASHBOARD CLIENTI - {users.length} utenti</h1>
      <table style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}>
        <thead><tr style={{ color: "gold" }}><th>Email</th><th>Saldo</th><th>Azione</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: 10 }}>{u.email || u.username}</td>
              <td style={{ padding: 10 }}>{u.balance}€</td>
              <td style={{ padding: 10 }}><button onClick={() => recharge(u.id, u.balance)} style={{ background: "gold", padding: "5px 15px", fontWeight: "bold" }}>RICARICA</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
