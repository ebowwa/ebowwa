// src/components/elijah/resume/calc.tsx
// Utility function to redact sensitive information
export const redact = (str: string, visibleChars: number): string => {
    if (str.length <= visibleChars) return str;
    return `${str.slice(0, visibleChars)}${'*'.repeat(str.length - visibleChars)}`;
  };
// Specific function to redact phone numbers
export const redactPhoneNumber = (phone: string): string => {
    const visiblePart = phone.slice(0, 8); // Adjust this to show the desired part of the phone number
    const redactedPart = '*'.repeat(phone.length - 8);
    return `${visiblePart}${redactedPart}`;
  };
  
  // Function to calculate age from DOB
  export const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };