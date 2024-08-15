function Hello({person}) {
  console.log(person);
  return (
    <div>
      <h1>{person.message} {person.name} {person.seatNumbers}</h1>
    </div>
  );
}

export default Hello;
