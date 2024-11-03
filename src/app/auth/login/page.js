"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const { error } = await res.json();
      setError(error || "Invalid credentials");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-900 py-10">
      <section>
        <div className="container px-6 text-center">
          <form
            className="flex flex-col gap-4 shadow-gray-900 p-6 shadow rounded-md"
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-4xl">Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              className="border border-gray-900 px-4 py-2 rounded-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-900 px-4 py-2 rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-gray-900 text-white rounded-xl hover:text-gray-900 hover:bg-white border border-transparent hover:border-gray-900 px-4 py-2 text-center"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
