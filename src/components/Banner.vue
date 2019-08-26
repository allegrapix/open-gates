<template>
    <div class="banner-container">
        <div class="overlay-logo overlay-logo-1">
            <img src="@/assets/open_gates_month_multiply.png" alt="top class medical">
        </div>
        <div class="overlay-logo overlay-logo-2">
            <img src="@/assets/open_gates_month_overlay.png" alt="top class medical">
        </div>
        <div class="banner-text-container flex-column">
            <div class="banner-logo">
                Top Class Medical
                <div class="banner-logo-img">
                    <img src="@/assets/open_gates_month_color.png" alt="top class medical">
                </div>
            </div>
            <h1 class="banner-title">Open Gates Month</h1>
            <p class="banner-text">Offers you the whole month of August Top Class Medical services at a 45-65% discount</p>
            <button class="btn">
                Try out offer
            </button>
        </div>
    </div>
</template>
<style lang="scss">
@import "@/scss/resources.scss";
.banner-container,
.footer-container {
    color: $default-color;
    
}

.banner-logo {
    font-size: 14px;
    position: relative;

    &-img {
        @include position(absolute, -60px, -60px, null, null);
        width: 70px;

        img {
            width: 100%;
        }
    }
}

.banner-container {
    background: url('../assets/hospital.png') top/cover no-repeat;
    position: relative;
    padding: 150px 50px;

    .overlay-logo {
        @include position(absolute, 0, 0, null, null);

        img {
            width: 100%;
        }

        &-1 {
            left: 65%;

            img {
                mix-blend-mode: multiply;
            }
        }

        &-2 {
            top: 30px;
            left: 71%;

            img {
                mix-blend-mode: overlay;
            }
        }
    }

    .banner-title {
        font-size: 42px;
        padding: 0 0 20px;
    }

    .banner-text {
        @include font($font-family: $secondary-font, $font-size: 32px, $line-height: 1.4, $text-transform: none);
        width: 50%;
        padding-bottom: 20px;
    }
}

@media screen and (max-width: 767px) {
    .banner-logo {
        &-img {
            @include position(absolute, -32px, -32px, null, null);
            width: 40px;
        }
    }

    .footer-container {
        padding: 110px 25px;
    }    

    .banner-container {
        padding: 75px 25px;

        .overlay-logo {
            &-1 {
                left: 60%;
            }

            &-2 {
                top: 20px;
                left: 67%;
            }
        }

        .banner-text-container {
            position: relative;
            z-index: 5;
        }

        .banner-title {
            font-size: 24px;
            padding: 0 0 10px;
            width: 50%;
        }

        .banner-text {
            font-size: 18px;
            width: 50%;
        }
    }
}

@media screen and (max-width: 550px) {
    .banner-logo {
        &-img {
            @include position(absolute, -32px, -32px, null, null);
            width: 40px;
        }
    }

    .banner-container {
        padding: 50px;

        .overlay-logo {
            &-1 {
                left: 55%;
            }

            &-2 {
                left: 65%;
            }
        }

        .banner-text-container {
            align-items: center;
        }

        .banner-title {
            text-align: center;
            width: 100%;
        }

        .banner-text {
            width: 100%;
            text-align: center;
        }
    }
}

@media screen and (max-width: 475px) {
    .banner-container .overlay-logo {
        &-1 {
            left: 45%;
        }

        &-2 {
            left: 55%;
        }
    }
}

@media screen and (max-width: 425px) {
    .banner-container .overlay-logo {
        &-1 {
            left: 40%;
        }

        &-2 {
            left: 50%;
        }
    }
}

@media screen and (max-width: 375px) {
    .banner-container .overlay-logo {
        &-1 {
            left: 30%;
        }

        &-2 {
            left: 40%;
        }
    }
}

@media screen and (max-width: 320px) {
    .banner-container .overlay-logo {
        &-1 {
            left: 15%;
        }

        &-2 {
            left: 30%;
        }
    }
}
</style>
