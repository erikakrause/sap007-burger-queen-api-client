function Select ({className, name, onChange, optionValues}) {
  return (
    <>
      <select
        className={className}
        name={name}
        onChange={onChange}
        defaultValue={optionValues[0].id}
      > 
        {optionValues.map((option,key) => {
          return( 
            <option value={option.id} key={key}> {option.title} </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
