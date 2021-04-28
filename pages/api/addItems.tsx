import { NextApiRequest, NextApiResponse } from "next";
import firebase from "./firebaseConfig";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const db = firebase.firestore();
  async function push2Firebase() {
    let question = "You can sync two RDS MySQL master databases that both accept writes on their respective regions.";
    let ans = "false";
    let reason =
      "S3 is not a filesystem, it has its own object access API hence it cannot support POSIX file functions. But EBS and EFS are POSIX-compliant";
    let item = {
      q: question,
      ans: ans,
      reason: reason,
    };

    const addItem = await db
      .collection("aws-sa-pro")
      .doc("items")
      .update({
        array: firebase.firestore.FieldValue.arrayUnion(item),
      });
  }
  push2Firebase().then(() => res.status(200).json({ message: `item added` }));
};
