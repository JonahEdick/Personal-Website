const { default: ContentPage } = require("../ContentPage");
import Logo from "../../../public/companies/Chainguard.png?react"
import DockerImg from "../../../public/technologies/Docker.png?react"
import TerraformImg from "../../../public/technologies/Terraform.png?react"
import WolfiImg from "../../../public/technologies/Wolfi.png?react"

class ChainguardContent extends ContentPage{
    compLogo = Logo;
    content = "Chainguard is a blah blah blah"
    technologies = [DockerImg, TerraformImg, WolfiImg];
}

export default ChainguardContent;