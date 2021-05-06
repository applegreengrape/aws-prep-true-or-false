import { NextApiRequest, NextApiResponse } from "next";
import firebase from "./firebaseConfig";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const db = firebase.firestore();
  const { q, ans, reason } = req.query;
  async function push2Firebase() {
      let item = {
      q: q,
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
