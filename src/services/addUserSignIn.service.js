import { ADD_USER_SIGN_IN_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const addUserSignIn = async (userDetails) => {
  const requestBody = {
    email_id: userDetails.email_id,
    password: userDetails.password,
  };

  try {
    const response = await fetch(ADD_USER_SIGN_IN_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addUserSignIn;
