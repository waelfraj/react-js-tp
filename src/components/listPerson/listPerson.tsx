import Person from "../person/person";
import ListPersonInterface from "./listPerson.interface";
const ListPerson = (
  props: ListPersonInterface
) => (
  <div>
    {props.person.map((item, index) => (
      <Person
        key={index}
        name={item.name}
        age={item.age}
      ></Person>
    ))}
  </div>
);

export default ListPerson;
