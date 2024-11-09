{
  // validTion of values
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in obj);
  };

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["email", "age"]));
}
