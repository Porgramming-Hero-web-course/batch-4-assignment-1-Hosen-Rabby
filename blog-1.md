# The significance of union and intersection types in Typescript.

### Union:

A union type is that kind of type that allows a variable to set various types of value. In TypesScript we can assign a value to a varialbe only that we explicitly declare but using union type we can use multiple type of variable. The symbol of union type is '|'

example:

```
type numBool = number | boolean;

let val:numBool;
val = 10;
val = true;
```

here we can see the variable 'val' can be used to assign both number and boolean value, or we can use either number or boolean.

### Intersection:

An Intersection type is used to make combine multiple type value into one. It is mostly used for object creation. Sometimes we need to inherits properties then we can use Intersection

example:

```
type phone={mobile:number};
type mail={email:string};

type Info = phone & mail;
const personInfo:Info={
mobile:0129000,
email:'a@a.com'
}
```

Here, Info is an insertion of phone and mail, which provides both phone and mail properties.