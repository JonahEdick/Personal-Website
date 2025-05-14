const { default: CompanyContent } = require("../CompanyContent");
import Logo from "../../../public/companies/EOPTIC.svg?react"

class EopticContent extends CompanyContent{
    compLogo = Logo;
    content = "Eoptic develops and manufactures imaging systems and instrumentation for defense, industrial, medical, space, and scientific markets. At Eoptic, we turn complex imaging challenges into clear, actionable insights, driving innovation and success for our clients across the globe."
    technologies = [];
}

export default EopticContent;