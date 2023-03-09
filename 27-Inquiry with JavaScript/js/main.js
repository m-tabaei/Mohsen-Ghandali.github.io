let people = [
  { name: "nina", age: 38, gender: "female" },
  { name: "jack", age: 28, gender: "male" }
];

function Inquiry() {
  let nameInput = document.getElementById("nameInput");
  let result = document.getElementById("result");
  let person = people.find(p => p.name === nameInput.value);
  if (person) {
    result.textContent = `Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`;
  } else {
    result.textContent = "Person not found.";
  }
}