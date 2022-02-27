const User = require('./models/User');
const AdminListing = require('./models/AdminListing');
const CustomerListing = require('./models/CustomerListing');
const { AuthenticationError } = require('apollo-server-errors');

exports.resolvers = {
    Query: {
        getUsers: async (parent, args) => {
            return await User.find({});
        },

        getAdminListings: async (parent, args) => {
            return await AdminListing.find({});
        },

        getCustomerListings: async (parent, args) => {
            return await CustomerListing.find({});
        },

        getAdminListingByName: async (parent, args) => {
            return await AdminListing.find({
                "username": args.username
            });
        },

        getAdminListingByCityAndPostalCode: async (parent, args) => {
            return await AdminListing.find({
                "city": args.city,
                "postal_code": args.postal_code
            });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            let newUser = User({...args});
            return newUser.save();
        },

        addAdminListing: async (parent, args) => {
            let newAdminListing = AdminListing({...args});
            return newAdminListing.save();
        },

        addCustomerListing: async (parent, args) => {
            let newCustomerListing = CustomerListing({...args});
            return newCustomerListing.save();
        }
    }
}