function ValidateAddForm (FormData) {
    const errorMessage = {};
    let isFormValid = true;
    const {
        name,
        category,
        quantity
    } = FormData;

    if (!name) {
        errorMessage.name = "This field is required";
        isFormValid = false
    } 

    if (!category) {
        errorMessage.category = "This field is required";
    }

    if (!quantity) {
        errorMessage.quantity = "This field is required";
    }

    return { errorMessage, isFormValid}
}

export default ValidateAddForm;