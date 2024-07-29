export default function NavItem({ name }) {
  return (
    <div className='text-black-900 px-4 py-2 transition duration-300 hover:bg-amesRed hover:text-white'>
      {name}
    </div>
  );
}
