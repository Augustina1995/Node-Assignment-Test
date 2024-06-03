import mongoose from "mongoose";

const companyProfileSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    founder: {
        type: String,
        required: true,
    },
    foundedYear: {
        type: Number,
        required: true,
    },
    numberOfEmployees: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("CompanyProfile", companyProfileSchema);