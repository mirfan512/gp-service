import { useState } from "react";

export type YesNo = "yes" | "no" | "";

export function useAssessmentForm() {
  // Patient details
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // Medical history (Eligibility)
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [qObesity, setQObesity] = useState<YesNo>("");
  const [cond1, setCond1] = useState<YesNo>("");
  const [cond2, setCond2] = useState<YesNo>("");
  const [cond3, setCond3] = useState<YesNo>("");
  const [cond4, setCond4] = useState<YesNo>("");
  const [cond5, setCond5] = useState<YesNo>("");
  const [cond6, setCond6] = useState<YesNo>("");

  // Mental health
  const [mh1, setMh1] = useState<YesNo>("");
  const [mh2, setMh2] = useState<YesNo>("");

  // Safety screening (Contraindications)
  const [c1, setC1] = useState<YesNo>("");
  const [c2, setC2] = useState<YesNo>("");
  const [c3, setC3] = useState<YesNo>("");
  const [c4, setC4] = useState<YesNo>("");
  const [c5, setC5] = useState<YesNo>("");

  // Medications
  const [cm1, setCm1] = useState<YesNo>("");
  const [cm2, setCm2] = useState<YesNo>("");

  // Lifestyle
  const [ls1, setLs1] = useState<YesNo>("");
  const [ls1Details, setLs1Details] = useState("");
  const [ls2, setLs2] = useState<YesNo>("");
  const [ls2Details, setLs2Details] = useState("");

  // Symptoms (Red flags)
  const [rf1, setRf1] = useState<YesNo>("");
  const [rf2, setRf2] = useState<YesNo>("");
  const [rf3, setRf3] = useState<YesNo>("");

  // Photos
  const [frontPhoto, setFrontPhoto] = useState<File | null>(null);
  const [sidePhoto, setSidePhoto] = useState<File | null>(null);
  const [backPhoto, setBackPhoto] = useState<File | null>(null);

  // Declaration
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");

  return {
    states: {
      fullName, dob, address, postcode, phoneNumber, email,
      height, weight, qObesity,
      cond1, cond2, cond3, cond4, cond5, cond6,
      mh1, mh2,
      c1, c2, c3, c4, c5,
      cm1, cm2,
      ls1, ls1Details, ls2, ls2Details,
      rf1, rf2, rf3,
      frontPhoto, sidePhoto, backPhoto,
      check1, check2, signature, date
    },
    setters: {
      setFullName, setDob, setAddress, setPostcode, setPhoneNumber, setEmail,
      setHeight, setWeight, setQObesity,
      setCond1, setCond2, setCond3, setCond4, setCond5, setCond6,
      setMh1, setMh2,
      setC1, setC2, setC3, setC4, setC5,
      setCm1, setCm2,
      setLs1, setLs1Details, setLs2, setLs2Details,
      setRf1, setRf2, setRf3,
      setFrontPhoto, setSidePhoto, setBackPhoto,
      setCheck1, setCheck2, setSignature, setDate
    }
  };
}
