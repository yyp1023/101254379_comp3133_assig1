const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type User {
        username: String
        firstname: String
        lastname: String
        password: String
        email: String
        type: String
    }

    type AdminListing {
        listing_id: String
        listing_title: String
        description: String
        street: String
        city: String
        postal_code: String
        price: String
        email: String
        username: String
    }

    type CustomerListing {
        listing_id: String
        booking_id: String
        booking_date: String
        booking_start: String
        booking_end: String
        username: String
    }

    type Query {
        getUsers: [User]
        getAdminListings: [AdminListing]
        getCustomerListings: [CustomerListing]
        getAdminListingByName(username: String!): [AdminListing]
        getAdminListingByCityAndPostalCode(city: String!, postal_code: String!): [AdminListing]
    }

    type Mutation {
        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ): User

        addAdminListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: String!
            email: String!
            username: String!
        ): AdminListing

        addCustomerListing(
            listing_id: String
            booking_id: String
            booking_date: String
            booking_start: String
            booking_end: String
            username: String
        ): CustomerListing
    }
`