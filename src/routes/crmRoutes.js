import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact,
    addNewCountry,
    getCountries,
    deleteCounty,
    getCountrytWithId,
    updateCountry
} from '../controllers/crmControllers';

const routes = (app) => {

    app.route('/teams')
        .get( getCountries)
        .post(addNewCountry);

        app.route('/teams/:id')
        .get(getCountrytWithId)
        .put(updateCountry)
        .delete(deleteCounty);         


    app.route('/contact')
        .get( getContacts)
        .post(addNewContact);
    
    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put(updateContact)
        .delete(deleteContact);     
}

export default routes;