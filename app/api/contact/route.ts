import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (b?.company) return NextResponse.json({ ok: true }); // honeypot filled: pretend success

  const name = String(b?.name ?? '').trim();
  const email = String(b?.email ?? '').trim();
  const message = String(b?.message ?? '').trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  // TODO: deliver the enquiry (Resend, SendGrid, Slack webhook, CRM…). Logged for now.
  console.log('New enquiry', { name, email, message });
  return NextResponse.json({ ok: true });
}
