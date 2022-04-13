"use strict"

const Validator = (options) => {
    const formElement = document.querySelector(options.form);

    const validate = (e, rule, inputElement) => {
        let target = e.target;
        let value = target.value;
        const messageInput = rule.test(value); 
        const messageElement = inputElement.parentElement.querySelector(options.errorSelector);
        
        if (messageInput === false) {
            inputElement.classList.add('input-err');
            messageElement.style.display = "block";
            messageElement.classList.add('message-err'); 
            inputElement.classList.remove('input-success');
        } else {
            inputElement.classList.add('input-success');
            inputElement.classList.remove('input-err');
            messageElement.style.display = "none";
        }
    };

    if (formElement) {
        options.rules.forEach((rule) => {
            const inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.addEventListener("blur", (e) => {
                    validate(e, rule, inputElement);
                });
                inputElement.addEventListener("input", (e) => {
                    validate(e, rule, inputElement);
                });
            }
        })
    }
};

Validator.isRequest = (selector) => {
    return {
        selector : selector,
        test: (value) => {
            return value.trim() ? true : false;
        }
    };
};

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? true : false;
        }
    };
};

Validator.isPassword = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? true : false;
        }
    };
};

Validator.isPhone = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? true : false;
        }
    };
};

Validator.isDate = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? true : false;
        }
    };
};

Validator({
    form: "#contact__form",
    errorSelector: '.form-message', 
    rules: [
        Validator.isRequest("#name"),
        Validator.isEmail("#email"),
        Validator.isRequest("#password"),
        Validator.isRequest("#phone"),
        Validator.isRequest("#date"),
    ]
});