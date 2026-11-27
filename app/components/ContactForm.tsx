'use client';
import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact" onSubmit={onSubmit}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
      <label>What are you building?<textarea name="message" required minLength={10} /></label>
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
      <p className="note" role="status">
        {status === 'sent' && 'Sent. We will reply within two working days.'}
        {status === 'error' && 'Could not send. Check your details and try again.'}
      </p>
    </form>
  );
}
