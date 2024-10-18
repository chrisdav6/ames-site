import { NextResponse } from 'next/server';
import WarrantyEmail from '@/email/warranty-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const {
    name,
    company,
    state,
    country,
    phone,
    email,
    datePurchased,
    serial,
    product,
  } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Product Warranty Registration <onboarding@resend.dev>',
      to: ['cdavis@transtechsys.com'],
      subject: 'Ames Product Warranty Registration',
      replyTo: email,
      react: (
        <WarrantyEmail
          name={name}
          company={company}
          state={state}
          country={country}
          phone={phone}
          email={email}
          datePurchased={datePurchased}
          serial={serial}
          product={product}
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
