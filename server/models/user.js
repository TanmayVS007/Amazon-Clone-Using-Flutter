import { Schema, model } from 'mongoose';

const userSchema = Schema({
    name: {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return value.match(re);
            },
            message: 'Please enter a valid email address'
        }
    }, 
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {
                return value.length >= 6;
            },
            message: 'Please enter long password'
        }
    }, 
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    // cart
});

const User = model('User', userSchema);
export default User;