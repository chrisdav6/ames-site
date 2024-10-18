import {
  Html,
  Body,
  Head,
  Hr,
  Preview,
  Heading,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

export default function WarrantyEmail({
  name,
  company,
  state,
  country,
  phone,
  email,
  datePurchased,
  serial,
  product,
}) {
  return (
    <Html>
      <Head />
      <Preview>Ames Product Warranty Registration</Preview>
      <Tailwind>
        <Body>
          <Heading as='h2'>Ames Product Warranty Registration</Heading>
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
            Date Purchased: {datePurchased}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Serial Number: {serial}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: '0', marginTop: '0' }}>
            Product: {product}
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
