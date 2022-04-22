function getInput() {
    const inputForm = document.getElementById("cityInput");
    const city = inputForm.value;

    /* regex kullanarak whitespaceleri felan temizle */
    if (!city) {
        return '';
    }

    return city;
}

export { getInput };