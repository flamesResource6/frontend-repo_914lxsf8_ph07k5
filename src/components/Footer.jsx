export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Loya. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-700 transition">Privacy</a>
          <a href="#" className="hover:text-gray-700 transition">Terms</a>
          <a href="#" className="hover:text-gray-700 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
