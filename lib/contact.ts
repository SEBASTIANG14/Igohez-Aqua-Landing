export type ContactData = {
  nombre: string;
  correo: string;
  telefono: string;
  interes: string;
  mensaje: string;
};

export const interestLabels: Record<string, string> = {
  servicio: "Mantenimiento y limpieza",
  quimicos: "Compra de químicos",
  producto: "Equipamiento e instalación",
  diagnostico: "Diagnóstico técnico",
};

export function initialContact(product: string | null, service: string | null): ContactData {
  const selection = (product || service || "").trim().slice(0, 160);
  return {
    nombre: "", correo: "", telefono: "",
    interes: product ? "producto" : "servicio",
    mensaje: selection ? `Hola, me interesa cotizar ${product ? "el producto" : "el servicio"}: ${selection}. Me gustaría recibir información.` : "",
  };
}

export function validateContact(data: ContactData): Partial<Record<keyof ContactData, string>> {
  const errors: Partial<Record<keyof ContactData, string>> = {};
  if (!data.nombre.trim() || data.nombre.length > 100) errors.nombre = "Escribe tu nombre (máximo 100 caracteres).";
  if (data.correo.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo.trim())) errors.correo = "Escribe un correo válido, por ejemplo nombre@correo.com.";
  const phone = data.telefono.replace(/[\s()-]/g, "");
  if (!/^(?:\+?52)?\d{10}$/.test(phone)) errors.telefono = "Escribe 10 dígitos; puedes incluir el prefijo +52.";
  if (!Object.hasOwn(interestLabels, data.interes)) errors.interes = "Selecciona una de las áreas de interés.";
  if (!data.mensaje.trim() || data.mensaje.length > 2000) errors.mensaje = "Describe tu solicitud (máximo 2,000 caracteres).";
  return errors;
}

export function contactMailto(data: ContactData): string {
  const subject = `Solicitud de cotización · ${interestLabels[data.interes] || "Piscinas"}`;
  const body = `Nombre: ${data.nombre.trim()}\nCorreo: ${data.correo.trim()}\nTeléfono: ${data.telefono.trim()}\nInterés: ${interestLabels[data.interes] || "Piscinas"}\n\n${data.mensaje.trim()}`;
  return `mailto:contacto@igohezaqua.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
