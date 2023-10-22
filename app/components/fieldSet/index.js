export default function FieldSet({ title, children }) {
  return (
    <fieldset className="border border-gray-400">
      <legend className="text-center">{title}</legend>
      {children}
    </fieldset>
  );
}
