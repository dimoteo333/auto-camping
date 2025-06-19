import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export default function Subscribe() {
  const [form, setForm] = useState({ facilityCode: '', targetDate: '', personCount: 1 });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/subscriptions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
  };

  return (
    <form className="max-w-md mx-auto space-y-4" onSubmit={submit}>
      <Input placeholder="캠핑장 코드" value={form.facilityCode} onChange={e => setForm({ ...form, facilityCode: e.target.value })} />
      <Input type="date" value={form.targetDate} onChange={e => setForm({ ...form, targetDate: e.target.value })} />
      <Input type="number" value={form.personCount} onChange={e => setForm({ ...form, personCount: parseInt(e.target.value) || 1 })} />
      <Button type="submit">신청하기</Button>
    </form>
  );
}