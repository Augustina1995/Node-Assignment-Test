import CompanyProfile from "../models/CompanyProfile.js";
import Company from "../models/Company.js";

export async function addCompanyProfile(req, res) {
  const { company, founder, foundedYear, numberOfEmployees } = req.body;

  if (!company || !founder || !foundedYear || !numberOfEmployees) {
    return res
      .status(400)
      .json({ error: "All fields are required to proceed" });
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
    res
      .status(500)
      .json({ error: "Error occured while adding company profile" });
  }
}

export async function getCompanyProfiles(req, res) {
  try {
    const companyProfiles = await CompanyProfile.find();
    res.status(200).json(companyProfiles);
  } catch (error) {
    console.log("Error fetching company profiles", error);
    res
      .status(500)
      .json({ error: "Error occured while fetching company profiles" });
  }
}

export async function updateCompanyProfileById(req, res) {
  const { id } = req.params;
  const { founder, foundedYear, numberOfEmployees } = req.body;

  if (!founder && !foundedYear && !numberOfEmployees) {
    return res
      .status(400)
      .json({ error: "At least one field is required to update details" });
  }

  try {
    const companyProfile = await CompanyProfile.findById(id);

    if (!companyProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    if (founder) {
      companyProfile.founder = founder;
    }
    if (foundedYear) {
      companyProfile.foundedYear = foundedYear;
    }
    if (numberOfEmployees) {
      companyProfile.numberOfEmployees = numberOfEmployees;
    }

    await companyProfile.save();

    res.status(200).json(companyProfile);
  } catch (error) {
    console.log("Error updating company profile", error);
    res
      .status(500)
      .json({ error: "Error occured while updating company profile" });
  }
}
