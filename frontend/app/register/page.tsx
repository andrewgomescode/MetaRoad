"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const register = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data?.error || "register-failed");
      return data;
    },
    onSuccess: () => {
      setMessage("Conta criada com sucesso. Você já pode acessar o login.");
    },
    onError: (err: unknown) => {
      setMessage("Falha ao registrar. Verifique os dados e tente novamente.");
      console.error(err);
    },
  });

  return (
    <main style={{ maxWidth: 420, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Criar conta</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register.mutate();
        }}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span>Usuário</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: 10,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
            placeholder="seu_usuario"
          />
        </label>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: 10,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
            placeholder="email@exemplo.com"
          />
        </label>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: 10,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
            placeholder="••••••••"
          />
        </label>
        <button
          type="submit"
          disabled={register.isPending}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            background: "#3b82f6",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {register.isPending ? "Criando…" : "Criar conta"}
        </button>
      </form>
      {message ? (
        <p
          style={{
            marginTop: 12,
            color: register.isError ? "#b91c1c" : "#16a34a",
          }}
        >
          {message}
        </p>
      ) : null}
    </main>
  );
}
