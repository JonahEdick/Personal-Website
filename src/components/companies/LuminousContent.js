const { default: ContentPage } = require("../ContentPage");
import Logo from "../../../public/companies/Luminous.svg?react"

class LuminousContent extends ContentPage{
    compLogo = Logo;
    compInfo = `
    Chainguard Inc. is a company focused on enhancing software supply chain security.
    They provide tools and solutions to help organizations secure their software development 
    and deployment processes,particularly by addressing vulnerabilities in container images 
    and Kubernetes environments. Their offerings often include capabilities for vulnerability 
    scanning, policy enforcement, and ensuring compliance with security best practices 
    throughout the software lifecycle. Chainguard aims to make it easier for developers and 
    enterprises to maintain secure and reliable software supply chains.
    `
    jobDesc = `
    As a part of Chainguard's Imaging team, my responsibilites were to analyze image requests,
    gauge how much effort would be required to make the image with no vulnerabilities, and 
    fulfil those requests by building packages and then testing them on images to make sure 
    that the images still functioned identical to their upstream counterparts while having 
    no vulnerabilities and smaller image size.
    `
    technologies = [];
}

export default LuminousContent;