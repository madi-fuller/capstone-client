function ValidateSignupForm (FormData) {
    const errorMessage = {};
    let isFormValid = true;
    const {
        name,
        username,
        password,
        reason_for_reducing
    } = FormData;

    if (!name) {
        errorMessage.name = "This field is required";
        isFormValid = false;
    } 

    if (!username) {
        errorMessage.username = "This field is required";
        isFormValid = false;
    }

    if (!password) {
        errorMessage.password = "This field is required";
        isFormValid = false;
    }

    if (!reason_for_reducing) {
        errorMessage.reason_for_reducing = "This field is required";
        isFormValid = false;
    }

    return { errorMessage, isFormValid}
}

export default ValidateSignupForm;