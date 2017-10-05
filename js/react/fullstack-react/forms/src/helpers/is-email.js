export default function isEmail(email) {
  return !!email.match(/^[^@\s]+@[^@\s]+$/);
}
