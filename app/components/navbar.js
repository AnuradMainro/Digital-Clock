function Navbar({ onSelect }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-gray-100 bg-opacity-30 backdrop-blur-lg z-50">
      <button
        className="mx-2 px-4 py-2 border border-transparent rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
        onClick={() => onSelect('local')}
        type="button"
      >
        Local Time
      </button>
      <button
        className="mx-2 px-4 py-2 border border-transparent rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
        onClick={() => onSelect('world')}
        type="button"
      >
        World Time
      </button>
    </nav>
  );
}

export default Navbar;
