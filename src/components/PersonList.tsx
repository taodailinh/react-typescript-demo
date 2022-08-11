type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.name.map((name, index) => (
        <h2 key={index}>
          {name.last} {name.first}
        </h2>
      ))}
    </>
  );
};
