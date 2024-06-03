import Company from "../models/Company.js";

export async function addCompany(req, res) {
  const { name, industry, location } = req.body;

  if (!name || !industry || !location) {
    return res
      .status(400)
      .json({ error: "Fields need to be filled in to proceed" });
  }

  try {
    const newCompany = new Company({
      name,
      industry,
      location,
    });

    await newCompany.save();

    res.status(201).json(newCompany);
  } catch (error) {
    console.log("Error saving new company", error);

    res.status(500).json({ error: "Error occured while adding company" });
  }
}

export async function getCompanies(req, res) {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    console.log("Error fetching companies", error);
    res.status(500).json({ error: "Error occured while fetching companies" });
  }
}

export async function getCompanyById(req, res) {
  const { id } = req.params;

  try {
    const company = await Company.findById(id).populate("companyProfile");

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    res.status(200).json(company);
  } catch (error) {
    console.log("Error fetching company by ID", error);
    res.status(500).json({ error: "Error occured while fetching company" });
  }
}

export async function updateCompanyById(req, res) {
  const { id } = req.params;
  const { name, industry, location } = req.body;

  if (!name && !industry && !location) {
    return res
      .status(400)
      .json({ error: "At least one field is required to update details" });
  }

  try {
    const company = await Company.findById(id);

    if (!company) {
      return res.status(400).json({ error: "Company not found" });
    }

    if (name) {
      company.name = name;
    }
    if (industry) {
      company.industry = industry;
    }
    if (location) {
      company.location = location;
    }

    await company.save();

    res.status(200).json(company);
  } catch (error) {
    console.log("Error updating company", error);

    res
      .status(500)
      .json({ error: "Error occured while updating company details" });
  }
}
