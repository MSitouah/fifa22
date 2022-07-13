import mongoose from 'mongoose';
import { ContactSchema,CountrySchema } from '../models/crmModel';


const Contact = mongoose.model('Contact', ContactSchema);
const Country = mongoose.model('Country', CountrySchema);


export const addNewCountry = (req, res) => {

        let newCountry = new Country(req.body);
        newCountry.save((err, country) => {
            if (err) {
                res.send(err);
            }            
            res.json(country);
        });   
};

export const getCountries = (req, res) => {
    Country.find((err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};

export const deleteCounty = (req, res) => {
    Country.remove({ id: req.params.id }, (err, country) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Record deleted' });
    });
};

export const getCountrytWithId = (req, res) => {

    Country.findOne({id: req.params.id }, (err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};

export const updateCountry = (req, res) => {
    Country.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, (err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};


//----------------------------------------------------------

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Record deleted' });
    });
};