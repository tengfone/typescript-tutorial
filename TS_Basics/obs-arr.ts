// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number,string]
// } = {
// const person = {
//   name: "Teng",
//   age: 30,
//   hobbies: ['Sports','Cooking'],
//   role: [2,'author']
// };

// basically like [[1,"ADMIN"],[2,"READ_ONLY"]]
enum Role {ADMIN,READ_ONLY,AUTHOR}

const person = {
  name: "Teng",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY
};

let favActivities: any[];
favActivities = ["Spaso", 123];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.READ_ONLY){
    console.log("Read only")
}