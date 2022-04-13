"use strict"

const Validator = (options) => {
    const formElement = document.querySelector(options.form);

    const validate = (e, rule, inputElement) => {
        console.log("dsd");
        let target = e.target;
        let value = target.value;
        const messageInput = rule.test(value); 
        const messageElement = inputElement.parentElement.querySelector('.form-message');
        
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
                console.log(inputElement);
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
            console.log(regex.test(value)) ;
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

Validator.isGender = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? true : false;
        }
    };
};

Validator({
    form: "#contact__form",
    rules: [
        Validator.isRequest("#name"),
        Validator.isEmail("#email"),
        Validator.isPassword("#password"),
        Validator.isPhone("#phone"),
        Validator.isDate("#date"),
        Validator.isGender("#gender"),
    ]
});