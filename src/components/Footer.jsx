export default function Footer() {
  return (
    <footer className="border-t border-base-600/15 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Ekene Ndubueze
        </p>
        <p className="text-xs text-text-muted">
          Built with React, Tailwind CSS &amp; a bit of Sommersby
        </p>
      </div>
    </footer>
  );
}
