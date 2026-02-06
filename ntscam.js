Js
// ntscam/ntscam.js
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

import { db } from "../firebase/firebase.js";
export async function isDuplicateUID(ff_uid, tournamentId) {
  const q = query(
    collection(db, "registrations"),
    where("ff_uid", "==", ff_uid),
    where("tournamentId", "==", tournamentId)
  );

  const snap = await getDocs(q);
  return !snap.empty; // true হলে duplicate
}

/**
 * Safe Registration Save
 */
export async function submitRegistration(data) {
  await addDoc(collection(db, "registrations"), {
    ff_uid: data.ff_uid,
    whatsapp: data.whatsapp,
    userId: data.userId || null,
    tournamentId: data.tournamentId,
    paymentProof: data.paymentProof || "",
    status: "pending",
    createdAt: serverTimestamp()
  });
}
