import {
  Html,
  Body,
  Head,
  Hr,
  Preview,
  Heading,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

export default function SalesEmail({
  name,
  company,
  state,
  country,
  phone,
  email,
  how,
  items,
  message,
}) {
  return (
    <Html>
      <Head />
      <Preview>Ames Sales Request</Preview>
      <Tailwind>
        <Body>
          <Heading as='h2'>Ames Sales Request</Heading>
          <Hr />
          <Text style={{ fontSize: 16, marginBottom: '0' }}>Name: {name}</Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Company: {company}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            State: {state}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Country: {country}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Phone: {phone}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Email: {email}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            How did you hear about us?: {how}
          </Text>
          <Section>
            <Text
              style={{
                fontSize: 16,
                marginBottom: '0',
                textDecoration: 'underline',
              }}
            >
              Please send info on:
            </Text>
            {items.map((item, idx) => (
              <Text
                key={idx}
                style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}
              >
                - {item}
              </Text>
            ))}
          </Section>
          <Section>
            <Text
              style={{
                fontSize: 16,
                marginBottom: '0',
                textDecoration: 'underline',
              }}
            >
              Message:
            </Text>
            <Text style={{ fontSize: 16, marginTop: '0' }}>{message}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
