import bcrypt from "bcryptjs";

// Hash password
export async function hashPassword(password) {

    return await bcrypt.hash(password, 10);

}

// Compare password
export async function comparePassword(
    password,
    hashedPassword
) {

    return await bcrypt.compare(
        password,
        hashedPassword
    );

}