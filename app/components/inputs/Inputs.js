export default function Inputs({ 
    labelAttributes,
    inputAttributes,
    inputName, 
    containerClassnames
 }) {

  return (
    <div className={containerClassnames}>
      <input {...inputAttributes} />
      <label {...labelAttributes}>{inputName}</label>
    </div>
  );
}
