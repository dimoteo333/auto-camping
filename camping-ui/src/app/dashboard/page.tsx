import { prisma } from '../../lib/db';
import { getAuth } from '@clerk/nextjs/server';

export default async function Dashboard() {
  const { userId } = await getAuth();
  if (!userId) return <p>로그인이 필요합니다.</p>;

  const subs = await prisma.subscription.findMany({ where: { userId } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">내 알림 현황</h1>
      {/* 목록 렌더링 */}
    </div>
  );
}