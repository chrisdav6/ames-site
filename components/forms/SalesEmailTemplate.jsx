export default function SalesEmailTemplate({
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
    <div>
      <h1>Ames Sales Request</h1>
      <hr />
      <p>Name: {name}</p>
      <p>Company: {company}</p>
      <p>State: {state}</p>
      <p>Country: {country}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>How did you hear about us?: {how}</p>
      <div>
        <p className='underline'>Please send info on:</p>
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
      <div>
        <p className='underline'>Message:</p>
        <p>{message}</p>
      </div>
    </div>
  );
}
