export default function FieldSet({ title, children }) {
  return (
    <fieldset className="border border-gray-400 p-3 rounded-lg">
      <legend className="text-center">{title}</legend>
      {children}
    </fieldset>
  );
}
