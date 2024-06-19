import CryptoJS from "crypto-js";

const secretKey =
  "U2FsdU2FsdGVkX18zvOABOGRKM8KM7OPw7kr1MqSSJGVkX18zvOABOU2FsdGVkX18zvOABOGRKM8KM7OPw7kr1MqSSJGRKM8KM7OPw7kr1MqSSJ";

// import { getFromLocalStorage } from '../utility'
// const _iddm_ls_c_uu = getFromLocalStorage('_iddm_ls_c_uu')
// saveToLocalStorage('_iddm_ls_c_uu', {a:1})

const saveToLocalStorage = (key, text) => {
  try {
    const encryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(text),
      secretKey
    ).toString();
    sessionStorage.setItem(key, encryptedText);
    return encryptedText;
    // sessionStorage.setItem(key, JSON.stringify(text));
    // console.log("Encrypted text saved to local storage successfully.");
  } catch (error) {
    console.error("Error saving encrypted text to local storage:", error);
  }
};

const getFromLocalStorage = (key) => {
  try {
    const encryptedText = sessionStorage.getItem(key);

    if (!encryptedText) {
      return null;
    }

    const decryptedText = CryptoJS.AES.decrypt(
      encryptedText,
      secretKey
    ).toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      return null;
    }

    console.log("Decrypted text retrieved from local storage successfully.");
    return JSON.parse(decryptedText);
    // return JSON.parse(encryptedText);
  } catch (error) {
    return null;
  }
};

export { getFromLocalStorage, saveToLocalStorage };
