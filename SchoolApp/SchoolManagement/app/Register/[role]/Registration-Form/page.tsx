"use client";
import React, { useState } from "react";
import styles from "../../../css/Register.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Registration_Form = () => {
    const [token, setToken] = useState<string>("");
    const [personalInfo,setPersonalInfo]=useState({
        firstName:"",
        middleName:"",
        lastName:"",
        DOB:"",
        gender:"",
        country:"",
        region:"",
        state:"",
        city:""


    })

    const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({ ...prev, [name]: value }));
      };

     const searchParams = useSearchParams();
      const role = searchParams.get("role");
      const registrationFormPath =
    role === "teacher"
      ? `/Register/Teacher`
      : `/Register/Student`;
  return (
    <>
<div className={styles.Reg_form_Container}>
<div className={styles.Reg_header}>
    <h2>Student Registration</h2>
    <Link href={registrationFormPath}>
    <IoIosCloseCircleOutline size={20}/>
    </Link>
</div>
<div className={styles.Reg_Content}>
<div >
    <div className={styles.RegFormTitle}>
        <h2>Verified Token</h2>
    </div>
    <div className={styles.Form_input}>
        <div>

    <label htmlFor="Token">Token</label>
    <input
                  className={styles.reg_input}
                  type="text"
                  value={token}
                  placeholder="Enter Copied Token"
                  onChange={e => setToken(e.target.value)}
                  required
                />
        </div>
</div>
    </div>
    <hr />
    <div >
    <div className={styles.RegFormTitle}>
        <h2>Personal Information</h2>
    </div>
    <div className={styles.Form_input}>
        <div>
    <label htmlFor="First Name">First Name</label>
    <input
                  className={styles.reg_input}
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  placeholder="Enter First Name"
                  onChange={handlePersonalInfoChange}
                  required
                />
        </div>
        <div>

                <label htmlFor="Middle Name">Middle Name</label>
    <input
                  className={styles.reg_input}
                  type="text"
                  name="middleName"
                  value={personalInfo.middleName}
                  placeholder="Enter Middle Name"
                  onChange={handlePersonalInfoChange}
                  required
                />
        </div>
        <div>

<label htmlFor="Last Name">Last Name</label>
<input
  className={styles.reg_input}
  type="text"
  name="lastName"
  value={personalInfo.lastName}
  placeholder="Enter Last Name"
  onChange={handlePersonalInfoChange}
  required
/>
</div>
<div className={styles.groupedinfo}>
<div>

<label htmlFor="DOB">DOB</label>
<input
  className={styles.reg_input}
  type="Date"
  name="DOB"
  value={personalInfo.DOB}
  onChange={handlePersonalInfoChange}
  required
/>
</div>
<div>

<label htmlFor="Gender">Gender</label>
<select
  className={styles.reg_input}
  name="gender"
  value={personalInfo.gender}
  onChange={handlePersonalInfoChange}
  required
>
    <option value="" disabled>Select Gender</option>
    <option value="male" >Male</option>
    <option value="female" >Female</option>
    <option value="other"  >Other</option>
    </select>
</div>
</div>
</div>
    </div>
    <hr />
</div>
</div>
    </>
  );
};

export default Registration_Form;
