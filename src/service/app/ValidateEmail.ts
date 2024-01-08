const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

function isValidPw(pw: string): boolean {
  return pw.length===8
}

export { isValidEmail,isValidPw }