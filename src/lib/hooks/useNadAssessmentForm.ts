import { useState } from "react";

export type YesNo = "yes" | "no" | "";

export interface NadConditions {
  heartDisease: YesNo;
  highBloodPressure: YesNo;
  diabetes: YesNo;
  liverDisease: YesNo;
  kidneyDisease: YesNo;
  autoimmuneDisease: YesNo;
  neurological: YesNo;
  cancer: YesNo;
  psychiatric: YesNo;
  gout: YesNo;
  mitochondrial: YesNo;
}

export function useNadAssessmentForm() {
  // Patient details
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // Product Selection Details
  const [productType, setProductType] = useState("Pen Kit");
  const [packageSize, setPackageSize] = useState("3 Months");

  // Reasons
  const [reasons, setReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");

  // Conditions
  const [conditions, setConditions] = useState<NadConditions>({
    heartDisease: "",
    highBloodPressure: "",
    diabetes: "",
    liverDisease: "",
    kidneyDisease: "",
    autoimmuneDisease: "",
    neurological: "",
    cancer: "",
    psychiatric: "",
    gout: "",
    mitochondrial: "",
  });

  // Declaration
  const [accurate, setAccurate] = useState(false);
  const [age, setAge] = useState(false);
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");

  return {
    states: {
      fullName,
      dob,
      address,
      postcode,
      phoneNumber,
      email,
      productType,
      packageSize,
      reasons,
      otherReason,
      conditions,
      accurate,
      age,
      signature,
      date,
    },
    setters: {
      setFullName,
      setDob,
      setAddress,
      setPostcode,
      setPhoneNumber,
      setEmail,
      setProductType,
      setPackageSize,
      setReasons,
      setOtherReason,
      setConditions,
      setAccurate,
      setAge,
      setSignature,
      setDate,
    },
  };
}
