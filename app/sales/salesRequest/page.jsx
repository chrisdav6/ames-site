export const metadata = {
  title: 'Ames Engineering | Sales Request',
  description:
    'We aim to serve as consultants to our customers. Fill out this brief form for more information on our products.',
};

export default function SalesRequest() {
  return (
    <div className='px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Sales Request
        </h3>
        <div className='text-center md:text-left text-lg mt-4'>
          <p>
            Would you like a sales quote or want more information on one of our
            products?
          </p>
          <p className='font-bold'>Email us, we’re happy to help!</p>
        </div>
      </div>
    </div>
  );
}
