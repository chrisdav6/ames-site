import ProductGrid from '@/components/ProductGrid';

export const metadata = {
  title: 'Ames Engineering | Products',
  description: 'Ames Engineering Products.',
};

export default function AllProducts() {
  return (
    <div>
      <div className='px-10 2xl:px-80 pt-14'>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Our Products
        </h3>
      </div>

      <ProductGrid />
    </div>
  );
}
