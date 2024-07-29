export default function NavItem({ name, mobile }) {
  return (
    <div
      className={`text-black-900 px-4 py-2 transition duration-300 font-medium  ${
        mobile
          ? 'bg-amesRed text-white text-lg'
          : 'hover:bg-amesRed hover:text-white'
      }`}
    >
      {name}
    </div>
  );
}
