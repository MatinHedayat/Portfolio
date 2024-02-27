export default function Label({ title, align }) {
  return (
    <div
      className={`flex mb-12 ${
        align === 'right' ? 'justify-end' : 'justify-start'
      }`}
    >
      <h3
        className={`gray-gr-br text-slate-200 w-36 text-center tracking-wider font-semibold py-3 rounded-md shadow-xl ${
          align === 'right' ? 'rounded-l-2xl' : 'rounded-r-2xl'
        }`}
      >
        {title}
      </h3>
    </div>
  );
}
