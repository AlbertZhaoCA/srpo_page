export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 text-gray-700 text-sm">
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">
          Lite Detective Series
        </a>
        <a href="#" className="hover:underline">
          Other Safety Works
        </a>
      </div>
    </nav>
  );
}
