import Head from "next/head";
import "./globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
      </Head>

      <body>
        {children}




      </body>
    </html>
  );
}
