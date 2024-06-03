Task: Develop a Node.js Express Application for Managing Companies and Company Profiles


Objective:

Create a web application using Node.js and Express, integrated with either PostgreSQL or MongoDB as the database. The application should manage a collection of companies and their associated profiles, including routes for basic CRUD operations and demonstrating a one-to-one relationship between the Companies and CompanyProfiles tables/collections.

db requirements: 

Use either PostgreSQL or MongoDB.
Create two tables (if using PostgreSQL) or collections (if using MongoDB): Companies and CompanyProfiles.
Companies should have fields: id, name, industry, location, profileId
CompanyProfiles should have fields: id, companyId, founder, foundedYear, numberOfEmployees.


Routes: 

Companies:

GET /companies: Fetch all companies.
GET /companies/:id: Fetch a single company by ID and it's company profile
POST /companies: Add a new company.
PUT /companies/:id: Update a company by ID.

CompanyProfiles:

GET /companyProfiles: Fetch all company profiles.
POST /companyProfiles: Add a new company profile (linked to a company).
PUT /companyProfiles/:id: Update a company profile by ID.

Application Logic:

Ensure proper error handling for routes.
Implement validation for the data being inserted or updated.
