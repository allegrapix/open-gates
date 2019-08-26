<template>
    <div class="contact-container">
        <p class="contact-title">Contact us</p>
        <div class="flex-between">
            <div class="contact-form-container">
                <form class="form-container">
                    <div class="flex-between">
                        <div class="input-name">
                            <label for="firstName">First Name:</label>
                            <div class="input-container">
                                <input type="text" name="firstName" id="firstName" v-model="firstName"  @blur="$v.firstName.$touch()" :class="{invalid: $v.firstName.$error}">
                                <p class="error-message" v-if="$v.firstName.$error">Please provide valid information</p>
                            </div>
                        </div>
                        <div class="input-name">
                            <label for="lastName">Last Name:</label>
                            <div class="input-container">
                                <input type="text" name="lastName" id="lastName" v-model="lastName" @blur="$v.lastName.$touch()" :class="{invalid: $v.lastName.$error}">  
                                <p class="error-message" v-if="$v.lastName.$error">Please provide valid information</p>                              
                            </div>
                        </div> 
                    </div>
                    <label for="email">E-mail</label>
                    <div class="input-container">
                        <input type="email" name="email" id="email" v-model="email" @blur="$v.email.$touch()" :class="{invalid: $v.email.$error}">
                        <p class="error-message" v-if="$v.email.$error">Please provide a valid email address</p>
                    </div>
                    <label for="department">Department</label>
                    <select name="department" id="department" v-model="department">
                        <option value="general">General</option>
                        <option value="surgery">Surgery</option>
                        <option value="cardiology">Cardiology</option> 
                        <option value="imaging">Imaging</option>
                        <option value="gastroenterology">Gastroenterology</option>                       
                    </select>
                    <label for="message">Message</label>
                    <div class="input-container">
                        <textarea name="message" id="message" cols="30" rows="10" v-model="message" @blur="$v.message.$touch()" :class="{invalid: $v.message.$error}"></textarea>
                        <p class="error-textarea" v-if="$v.message.$error">Required</p>
                    </div>
                    <div class="terms">
                        <label for="terms" class="terms-container">
                            <input type="checkbox" name="terms" id="terms" v-model="terms" @change="$v.terms.$touch()" :class="{invalid: $v.terms.$error}">
                            <span class="checkmark" :class="{invalid: $v.terms.$invalid}"></span>
                            <span class="terms-text" :class="{errorCheckbox: $v.terms.$invalid}">Accept terms and conditions</span>
                        </label>                        
                    </div>
                    <div class="flex-end">
                        <button class="btn" type="submit" :disabled="$v.$invalid">Submit</button>
                    </div>
                </form> 
            </div>
            <div class="address-container">
                <p class="address-title">Top Class Medical</p>
                <div class="address-details">
                    <div class="flex-start">
                        <div class="icon">
                            <Location />
                        </div>   
                       <p class="address-text">27 Lorem Ipsum Street</p>
                    </div>
                    <div class="flex-start">
                        <div class="icon">
                            <Envelope />
                        </div>
                        <p class="address-text">cotact@topcallmedical.com</p>
                    </div>
                    <div class="flex-start">
                        <div class="icon">
                            <Phone />
                        </div> 
                        <p class="address-text">0700-12345678</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Location from "@/components/Location";
import Envelope from "@/components/Envelope";
import Phone from "@/components/Phone";
import { required, email, alpha, minLength } from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            tel: null,
            email: '',
            department: 'general',
            message: '',
            terms: false
        }
    },
    validations: {
        firstName: {
            required,
            alpha,
            minLength: minLength(2)
        },
        lastName: {
            required,
            alpha,
            minLength: minLength(2)
        },
        email: {
            required,
            email
        },
        message: {
            required
        },
        terms: {
            required (val) {
                return val
            }  
        }
    },
    components: {
        Location,
        Envelope,
        Phone
    }
}
</script>

<style lang="scss">
@import "@/scss/resources.scss";
.contact-container {
    background: url('../assets/hospital_light.png') top/cover no-repeat;
    padding: 50px;
    color: $primary-color;

    .contact-title {
        @include font($font-size: 42px, $font-weight: 700);
    }

    .flex-between {
        flex-wrap: wrap;
    }

    .contact-form-container {
        width: 60%;

        .form-container {
            width: 100%;

            input,
            select,
            textarea {
                @include border-radius(7px);
                font-size: 14px;
                display: block;
                width: 100%;
                background: $default-color;
                padding: 5px 10px;
                margin: 0 0 15px;
                border: 1px solid $secondary-color;
                outline: none;
                transition: all 300ms ease-in-out;
                text-transform: none;

                @include on_event {
                    box-shadow: 0 0 15px 0px rgba(33, 178, 231, .5);
                }
            }

            .error-message,
            .error-textarea,
            .error-checkbox {
                @include font($font-family: $secondary-font, $font-size: 12px, $color: $warning-color, $text-transform: none);
            }
            .input-container {
                position: relative;

                .error-message {
                    @include position(absolute, 32px, null, null 0);
                }

                .error-textarea {
                    @include position(absolute, 100%, null, null 0);
                }
            }



            label {
                @include font($font-size: 18px, $text-transform: none);
            }

            .input-name {
                width: 48%;
            }

            .terms {
                padding: 10px 0;
            }

            .terms-container {
                position: relative;

                .checkmark {
                    @include position(absolute, 0, null, null, 0);
                    @include size(20px, 20px);
                    @include border-radius(3px);
                    background: $default-color;  
                    border: 1px solid $primary-color;
                }

                input[type=checkbox] {
                    @include position(absolute, 0, null, null, 0);
                    @include size(20px, 20px);
                    cursor: pointer;
                    opacity: 0;
                    z-index: 52;
                    
                    &:checked + .checkmark {
                        background: $default-color url('../assets/check-solid.png') center/15px no-repeat; 
                    }
                }

                .terms-text {
                    font-size: 16px;
                    margin-left: 30px;
                }

                .errorCheckbox {
                    color: $warning-color;
                }

                .invalid {
                    border: 1px solid $warning-color;
                }
            }
            
            .invalid {
                box-shadow: 0 0 15px 0px rgba(246, 85, 93, .5);
                border: 1px solid $warning-color;
                background: $default-color;
            }            

            .btn {
                background-image: linear-gradient(to top right, $third-color, $fifth-color);
                margin-bottom: 30px;

                &:disabled {
                    background-image: linear-gradient(to top right, #4a8aa0, #b3c8c8);

                    @include on_event {
                        box-shadow: none;
                    }
                }
            }
        }
    }

    .address-container {
        width: 40%;
        padding-left: 50px;

        .address-title {
            @include font($font-size: 24px, $font-weight: 700);
            margin-bottom: 20px;
        }

        .address-details {
            flex-wrap: wrap;
            align-items: flex-start; 

            .icon {
                padding: 20px 0 0;

                svg {
                    width: 20px;
                }
            }

            .address-text {
                @include font($font-size: 18px, $text-transform: none);
                padding: 20px;
                margin: 0;
            }
        }
    }
}

@media screen and (max-width: 991px) {
    .contact-container {
        .flex-between {
            flex-wrap: wrap;
        }

        .contact-form-container {
            width: 55%;

            .btn {
                width: 100%;
                padding: 7px 50px;
            }
        }

        .address-container {
            width: 45%;

            .address-details {
                .address-text {
                    font-size: 16px;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .contact-container {
        padding: 25px;

        .contact-title {
            @include font($font-size: 32px, $font-weight: 700);
        }

        .contact-form-container {
            width: 100%;

            .form-container .input-name {
                width: 100%;
            }
        }

        .address-container {
            width: 100%;
            padding: 0;

            .address-title {
                @include font($font-size: 24px, $font-weight: 700, $text-align: center);
            }

            .address-details {
                .flex-start {
                    justify-content: center;
                }
            }
        }
    }
}
</style>
