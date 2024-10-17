import { NextResponse } from 'next/server';
import SalesEmailTemplate from '@/components/forms/SalesEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, company, state, country, phone, email, how, items, message } =
    body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['cdavis@transtechsys.com'],
      subject: 'Ames Sales Request',
      react: SalesEmailTemplate({
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
