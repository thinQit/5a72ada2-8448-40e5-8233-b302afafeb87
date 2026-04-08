export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#333333]">Contact</h1>
      <p className="mt-4 text-[#333333]/80">
        We’re here to help with same-hour delivery questions, quotes, and urgent requests.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-[#D40511]">Email</p>
        <p className="mt-1 text-[#333333]">support@example.com</p>
        <p className="mt-4 text-sm font-semibold text-[#D40511]">Phone</p>
        <p className="mt-1 text-[#333333]">+1 (555) 123-4567</p>
      </div>
    </main>
  );
}
