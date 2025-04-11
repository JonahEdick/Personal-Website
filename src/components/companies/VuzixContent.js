const { default: CompanyContent } = require("../CompanyContent");
import Logo from "../../../public/companies/Vuzix.webp?react"
import NodeImg from "../../../public/technologies/NodeJS.webp?react"
import SwaggerImg from "../../../public/technologies/Swagger.png?react"
import AzureImg from "../../../public/technologies/Azure.png?react"
import JiraImg from "../../../public/technologies/Jira.svg?react"
import TypescriptImg from "../../../public/technologies/Typescript.png?react"

class VuzixContent extends CompanyContent{
    compLogo = Logo;
    compInfo = `
    Vuzix Corporation is a leading supplier of smart glasses and augmented reality (AR) 
    technologies. Founded in 1997 and headquartered in Rochester, New York, Vuzix designs, 
    manufactures, and markets wearable display devices that integrate digital content into 
    the user's real-world environment. Their products are used in various industries, 
    including enterprise, healthcare, manufacturing, and consumer markets. Vuzix is known 
    for its innovations in AR and virtual reality (VR) solutions, offering products like 
    the Vuzix Blade, M-Series, and Waveguide optics. The company aims to enhance 
    productivity, efficiency, and user experiences through its advanced wearable technology.
    `
    jobDesc = `
    As a part of Vuzix's Solutions Team, my responsibilites were to focus on tasks to enhance 
    the existing Node.JS backend server to get ready for a closed beta release. I was also 
    responsible for writing unit testing for the backend server to ensure that existing and 
    newly implemented funtionality would be deployed with no defects. Other responsibilites 
    would include collaborative development with mobile and web developers to ensure that 
    the system as a whole would function properly and with high quality.
    `
    technologies = [NodeImg, SwaggerImg, AzureImg, JiraImg, TypescriptImg]
}

export default VuzixContent;