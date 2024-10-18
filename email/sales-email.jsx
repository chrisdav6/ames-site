import {
  Html,
  Body,
  Head,
  Hr,
  Preview,
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
          <Section>Ames Sales Request</Section>
          <Hr />
          <Text>Name: {name}</Text>
          <Text>Company: {company}</Text>
          <Text>State: {state}</Text>
          <Text>Country: {country}</Text>
          <Text>Phone: {phone}</Text>
          <Text>Email: {email}</Text>
          <Text>How did you hear about us?: {how}</Text>
          <Section>
            <Text>Please send info on:</Text>
            {items.map((item, idx) => (
              <Text key={idx}>{item}</Text>
            ))}
          </Section>
          <Section>
            <Text className='underline'>Message:</Text>
            <Text>{message}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
