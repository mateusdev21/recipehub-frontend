export default function PublicLayout({ children }) {
  return (
    <>
      <main className="flex items-center justify-center align-middle min-h-screen w-full bg-[#ffcf60]">
        <div className="rounded-xl bg-white overflow-hidden shadow-lg transition">
          <div className="container items-center justify-center px-8 py-8">
            <h2 className="font-bold text-3xl text-[#222222] text-center mb-2">
              🍳 Recipe<span className="text-[#ffcf60]">Hub</span>
            </h2>
            <p className="font-medium text-xs text-gray-500 text-center max-w-100">
              {`"Discover, explore, and manage delicious recipes effortlessly in one modern, intuitive cooking catalog."`}
            </p>
            <hr className="mt-6 mb-8 border-t border-gray-300" />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
