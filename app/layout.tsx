import type { Metadata } from 'next';
import { DashboardShell } from '@/components/dashboard-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Winmotor Academy',
  description: 'Panel SaaS de Winmotor Academy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
