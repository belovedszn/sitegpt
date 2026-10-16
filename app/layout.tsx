import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Plinth — Recurring billing infrastructure for Nigeria",
  description: "Recurring billing and reconciliation infrastructure, built for how Nigeria actually pays.",
  metadataBase: new URL("https://plinth.example"),
  openGraph: { title:"Plinth", description:"Recurring billing infrastructure for Nigeria", type:"website" },
  twitter: { card:"summary_large_image", title:"Plinth", description:"Recurring billing infrastructure for Nigeria" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
