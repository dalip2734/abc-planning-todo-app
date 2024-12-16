const Header = () => {
  return (
    <header className="bg-midnight-navy text-crisp-frost p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <img src="/vite.svg" alt="Atomic logo" className="w-8 h-8" />
          Atomic
        </h1>
        <p className="text-loudy-slate">Innovate. Create. Inspire.</p>
      </div>
    </header>
  );
};

export default Header;
