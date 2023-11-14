// app/layout.tsx
import Simple from "./SimpleSidebar/page";
import { Providers } from "./providers";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Simple child ={children}/>
          <h1>ahmed</h1>
        </Providers>
      </body>
    </html>
  );
}
