import bcrypt from "bcrypt";

// const saltRounds = 12;
const plaintextPassword = "hunter123";
const hashedPassword = "$2b$10$JLAV0bcG9KrcZp8sLBxw/uVGvhdInFQxq5AXhVl8HjahoCGlOpK3S";

async function handlePasswords() {
    // todo Put this in the signup router
    // const hash = await bcrypt.hash(plaintextPassword, saltRounds);
    // console.log(hash);

    // todo Put this in the login router
    const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
    console.log(isSame);
}

handlePasswords();

export default {};
