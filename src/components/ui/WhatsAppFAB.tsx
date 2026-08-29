"use client";

export default function WhatsAppFAB() {
  const whatsappNumber = "51955416601";
  const defaultMessage = encodeURIComponent("Hola, me gustaría cotizar concreto premezclado.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Notificación Tooltip — solo visible en sm+ para evitar desbordamiento */}
      <span className="hidden sm:flex absolute right-full mr-4 w-max bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wide py-2.5 px-5 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none items-center gap-2">
        Cotización al Instante
        <span className="absolute top-1/2 -translate-y-1/2 -right-2 border-[8px] border-transparent border-l-white"></span>
      </span>

      <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" strokeWidth="1.2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.265-.464-2.409-1.484-.888-.795-1.484-1.77-1.663-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.202.049-.382-.029-.533-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.705.248-1.31.174-1.433-.074-.13-.272-.2-.572-.345z" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.846.5 3.584 1.39 5.093L2 22l4.985-1.325A9.957 9.957 0 0012 22z" fill="none" strokeWidth="1.5" />
      </svg>
    </a>
  );
}
