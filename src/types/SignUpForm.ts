export type SignUpForm = {
  name: string; // required, minLength: 2, maxLength: 20
  lastName: string; // minLength: 2
  age: number; // required, min: 18
}