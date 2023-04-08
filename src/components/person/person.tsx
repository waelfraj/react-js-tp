import PersonInterface from "./person.interface";

const Person = (
  props: PersonInterface
) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
    </div>
  );
};

export default Person;
