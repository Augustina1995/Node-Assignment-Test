import Company from "../models/Company.js";

export async function addCompany(req, res) {
    const { name, industry, location } = req.body;

    if (!name || !industry || !location) {
        return res.status(400).json({ error: "Fields need to be filled in to proceed" });
    }

    try {
        const newCompany = new Company({
            name,
            industry,
            location
        });

        await newCompany.save();

        res.status(201).json(newCompany);
    } catch (error) {
        console.log("Error saving new company", error);

        res.status(500).json({ error: "Error occured while adding company" });
    }
}