"use client";

import { useState, type FormEvent } from "react";

const WEBHOOK_URL = "https://hook.us2.make.com/e48ycs1dfqoyflu6nq4n7xk7v1fulpm9";

type Status = "idle" | "sending" | "success" | "error";

export default function AtmosForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fecha: new Date().toISOString(),
      nombre: String(data.get("nombre") ?? ""),
      artista: String(data.get("artista") ?? ""),
      cantidad_stems: String(data.get("cantidad_stems") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
      email: String(data.get("email") ?? ""),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-dm text-[15px] font-light text-crema/80 leading-relaxed text-center py-8">
        Tu cotización fue enviada. Te contactamos en menos de 24 horas.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="nombre" placeholder="Nombre" required />
      <Field name="artista" placeholder="Artista o Sello" required />
      <Field name="email" placeholder="Email de respuesta" type="email" required />
      <Field
        name="cantidad_stems"
        placeholder="Cantidad de stems de tu mezcla"
        type="number"
        required
      />
      <p className="font-mono text-[10px] tracking-[0.06em] text-senal/50 leading-relaxed -mt-1">
        Formato requerido: stems en .wav 48kHz / 24 bits + mezcla estéreo de referencia.
      </p>

      <textarea
        name="mensaje"
        placeholder="Mensaje"
        rows={4}
        required
        className="bg-medianoche border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors resize-none"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-mono text-[10px] tracking-[0.12em] bg-senal text-white px-6 py-3.5 mt-2 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow self-start disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "ENVIANDO..." : "ENVIAR COTIZACIÓN →"}
      </button>

      {status === "error" && (
        <p className="font-dm text-[13px] font-light text-crema/60 leading-relaxed">
          Hubo un problema al enviar. Escríbenos directamente a infoestudioserena@gmail.com
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="bg-medianoche border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors"
    />
  );
}
