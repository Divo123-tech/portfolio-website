import MetaLogo from "../../assets/Meta.png";
import ZTM from "../../assets/ZTM.png";
import AWSCD from "../../assets/AWS.png";
import Citi from "../../assets/Citi.png";
import NUS from "../../assets/NUS.png";
export type certificationType = {
  name: string;
  image: any;
  url: string;
};

const certificationData = [
  {
    name: "Meta Front-End Professional Certificate",
    image: MetaLogo,
    url: "https://www.coursera.org/account/accomplishments/professional-cert/XVXLNJNZVA7P?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    name: "AWS Certified Developer Associate",
    image: AWSCD,
    url: "https://www.credly.com/badges/e7c1b304-3483-49d8-b226-8b61cb2faa05/linked_in_profile",
  },
  {
    name: "The Complete Web Developer : Zero to Mastery",
    image: ZTM,
    url: "https://www.udemy.com/certificate/UC-36466cbf-8642-41df-be02-23deaebc5668/",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    image: AWSCD,
    url: "https://www.credly.com/earner/earned/badge/122dd6c9-f647-48f3-bd53-ed2120b844af",
  },
  {
    name: "Technology Software Development Job Simulation",
    image: Citi,
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Citi/2jxESPvorR7fmypXj_Citi_gZ4RMFzNBaZyERo5w_1723872546465_completion_certificate.pdf",
  },
  {
    name: "Data Analytics and Mathematical Studies",
    image: NUS,
    url: "https://www.linkedin.com/in/cristopher-harsono-870807201/details/certifications/",
  },
];

export default certificationData;
