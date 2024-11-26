import { NextResponse } from 'next/server';
import SupportEmail from '@/email/support-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const {
    name,
    address,
    city,
    state,
    zipcode,
    country,
    phone,
    email,
    estimate,
    serial,
    product,
    message,
  } = body;

  try {
    const { data, error } = await resend.emails.send({
      // from: 'Support Request <onboarding@resend.dev>',
      from: 'Support Request <website@amesengineering.com>',
      to: ['cdavis@transtechsys.com'],
      subject: 'Ames Support Request',
      replyTo: email,
      react: (
        <SupportEmail
          name={name}
          address={address}
          city={city}
          state={state}
          zipcode={zipcode}
          country={country}
          phone={phone}
          email={email}
          estimate={estimate}
          serial={serial}
          product={product}
          message={message}
        />
      ),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
