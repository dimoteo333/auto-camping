// import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
// import { Navbar } from '../../components/ui/navbar';

export const metadata = {
  title: '캠핑 알림 서비스',
  description: '지자체 캠핑장 예약 취소표 모니터링',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className="min-h-screen bg-gray-50">
          <main className="p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}