import { NextResponse } from 'next/server';
import SalesEmail from '@/email/sales-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, company, state, country, phone, email, how, items, message } =
    body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Sales Request <onboarding@resend.dev>',
      to: ['cdavis@transtechsys.com'],
      subject: 'Ames Sales Request',
      replyTo: email,
      react: SalesEmail({
        name,
        company,
        state,
        country,
        phone,
        email,
        how,
        items,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
