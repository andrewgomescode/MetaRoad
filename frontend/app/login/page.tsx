"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { graphqlClient } from "../../lib/graphql-client";
import { LOGIN_MUTATION } from "../../lib/queries";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const login = useMutation({
    mutationFn: async () => {
      const res = await graphqlClient.request(LOGIN_MUTATION, {
        username,
        password,
      });
      return res;
    },
    onSuccess: (data) => {
      setMessage("Login efetuado com sucesso.");
      // Em produção: salvar tokens (authToken/refreshToken) com httpOnly cookies via rota API
      // e redirecionar para área logada.
      // console.log(data);
    },
    onError: (err: unknown) => {
      setMessage("Falha no login. Verifique suas credenciais.");
      console.error(err);
    },
  });

  return (
    <main style={{ maxWidth: 400, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Entrar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login.mutate();
        }}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span>Usuário ou Email</span>
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
          disabled={login.isPending}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            background: "#3b82f6",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {login.isPending ? "Entrando…" : "Entrar"}
        </button>
      </form>
      {message ? (
        <p
          style={{
            marginTop: 12,
            color: login.isError ? "#b91c1c" : "#16a34a",
          }}
        >
          {message}
        </p>
      ) : null}
    </main>
  );
}
