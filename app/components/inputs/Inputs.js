export default function Inputs({ 
    labelAttributes,
    inputAttributes,
    inputName, 
    containerClassnames
 }) {

  return (
    <div className={containerClassnames}>
      <label {...labelAttributes}>{inputName}</label>
      <input {...inputAttributes} />
    </div>
  );
}
