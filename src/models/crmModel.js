import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Input fistname'
    },
    lastName: {
        type: String,
        required: 'Input lastname'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },               
    created_date: {
        type: Date,
        default: Date.now
    }     
});


export const CountrySchema = new Schema({
    id: {
        type: String,
        required: 'Input id'
    },
    country: {
        type: String,
        required: 'Input country name'
    },
    alternate_name: {
        type: String
    },
    fifa_code: {
        type: String,
        required: 'Input country code'
    },
    group_id: {
        type: Number,
        required: 'Input group id'
    },
    group_letter: {
        type: String,
        required: 'Input group letter'
    },
    wins: { type: Number },
    draws: { type: Number },
    losses: { type: Number },
    games_played: { type: Number },
    points: { type: Number },
    goals_for: { type: Number },
    goals_against: { type: Number },
    goal_differential: { type: Number }
});