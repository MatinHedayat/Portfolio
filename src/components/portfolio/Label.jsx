export default function Label({ title, align }) {
  return (
    <div
      className={`flex mb-12 ${
        align === 'right' ? 'justify-end' : 'justify-start'
      }`}
    >
      <h3
        className={`bg-sky-600 text-white w-40 text-center text-xl font-semibold py-3 rounded-md shadow-xl ${
          align === 'right' ? 'rounded-l-2xl' : 'rounded-r-2xl'
        }`}
      >
        {title}
      </h3>
    </div>
  );
}
