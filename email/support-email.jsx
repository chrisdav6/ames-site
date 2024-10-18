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

export default function SupportEmail({
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
}) {
  return (
    <Html>
      <Head />
      <Preview>Ames Support Request</Preview>
      <Tailwind>
        <Body>
          <Heading as='h2'>Ames Support Request</Heading>
          <Hr />
          <Text style={{ fontSize: 16, marginBottom: '0' }}>Name: {name}</Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Address: {address}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            City: {city}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            State: {state}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Zipcode: {zipcode}
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
            Estimate: {estimate}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Serial Number: {serial}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Product: {product}
          </Text>
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
