import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (id == "1") {
    let item = "S3 is a POSIX-compliant storage service?";
    let ans = "false";
    let respose = {
      item: item,
      ans: ans,
      reason:
        "S3 is not a filesystem, it has its own object access API hence it cannot support POSIX file functions. But EBS and EFS are POSIX-compliant",
    };

    res.status(200).json(respose);
  }

  if (id == "2") {
    let item =
      "You can sync two RDS MySQL master databases that both accept writes on their respective regions.";
    let ans = "false";
    let respose = {
      item: item,
      ans: ans,
      reason:
        "You can’t sync two MySQL master databases that both accept writes on their respective regions.",
    };

    res.status(200).json(respose);
  }

  if (id == "3") {
    let item =
      "Amazon CloudFront only accepts well-formed connections to prevent many common DDoS attacks like SYN floods and UDP reflection attacks from reaching your origin.";
    let ans = "true";
    let respose = {
      item: item,
      ans: ans,
      reason: "",
    };

    res.status(200).json(respose);
  }
};
