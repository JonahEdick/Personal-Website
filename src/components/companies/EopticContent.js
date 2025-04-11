const { default: CompanyContent } = require("../CompanyContent");
import Logo from "../../../public/companies/EOPTIC.svg?react"

class EopticContent extends CompanyContent{
    compLogo = Logo;
    content = "Chainguard is a blah blah blah"
    technologies = [];
}

export default EopticContent;