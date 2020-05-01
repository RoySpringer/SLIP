import '../css/style.scss';
import '../css/animation.scss';

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(contactForm);
    if (formData.has("name") && formData.has("subject") && formData.has("body")) {
        let hasValues = true;
        for (let value of formData.values()) {
            if (value.length == 0) {
                hasValues = false;
            }
        }
        if (hasValues) {
            window.open(`mailto:sociallifeinstantperformance@gmail.com?subject=${encodeURI(formData.get("subject"))}&body=${encodeURI(formData.get("body") + "\n\nMet Vriendelijke groet,\n\n")}${formData.get("name")}`);
        }
    }
});