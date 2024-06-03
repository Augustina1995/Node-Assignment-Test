import CompanyProfile from "../models/CompanyProfile.js";
import Company from "../models/Company.js";

export async function addCompanyProfile(req, res) {
    const { company, founder, foundedYear, numberOfEmployees } = req.body;

    if (!company || !founder || !foundedYear || !numberOfEmployees) {
        return res.status(400).json({ error: "All fields are required to proceed" });
    }

    try {
        const existingCompany = await Company.findById(company);
        if (!existingCompany) {
            return res.status(404).json({ error: "Company not found" });
        }

        const newCompanyProfile = new CompanyProfile({
            company,
            founder,
            foundedYear,
            numberOfEmployees,
        });

        await newCompanyProfile.save();

        existingCompany.companyProfile = newCompanyProfile._id;
        await existingCompany.save();

        res.status(201).json(newCompanyProfile);
    } catch (error) {
        console.log("Error adding company profile", error);
        res.status(500).json({ error: "Error occured while adding company profile" });
    }
}