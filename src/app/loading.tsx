export default function Loading() {
  return (
    <section className="pt-40 pb-40 bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#AD131B] rounded-full animate-spin mx-auto mb-6" />
        <p className="text-gray-500 font-semibold uppercase text-sm tracking-widest">Cargando...</p>
      </div>
    </section>
  );
}
