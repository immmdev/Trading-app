const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


// staic function in the userModel

UserSchema.statics.signup = async function (name, username, email, password) {

    // validation
    if (!name || !username || !email || !password) {
        throw Error("All fiels are required");
    }

    if (!validator.isEmail(email)) {
        throw Error("Enter a valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Use a strong password");
    }


    const exists = await this.findOne({ username });

    if (exists) {
        throw Error("Username already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ name, username, email, password: hash });

    return user;
}

// static method for login

UserSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error("All fiels are required");
    }

    const user = await this.findOne({ username });

    if (!user) {
        throw Error("Username does not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect Password");
    }

    return user;
}

module.exports = mongoose.model("User", UserSchema);
