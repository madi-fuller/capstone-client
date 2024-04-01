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
        errorMessage.category = "This field is required";
        isFormValid = false;
    }

    if (!password) {
        errorMessage.quantity = "This field is required";
        isFormValid = false;
    }

    if (!reason_for_reducing) {
        errorMessage.quantity = "This field is required";
        isFormValid = false;
    }

    return { errorMessage, isFormValid}
}

export default ValidateSignupForm;