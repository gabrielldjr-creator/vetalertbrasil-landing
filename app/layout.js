// Global layout for the Vet Alert Brasil landing page.
import "./globals.css";

export const metadata = {
  title: "Vet Alert Brasil",
  description:
    "Plataforma de inteligência epidemiológica veterinária com alertas regionais anônimos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Main content is rendered here to keep layout consistent across pages. */}
        {children}
      </body>
    </html>
  );
}
