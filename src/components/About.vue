<template>
    <div class="about-container">
        <p class="about-title">About open gates month</p>
        <div class="cards-container flex-between" >
            <a :href="card.anchor" class="card fade-in" :class="card.cardClass" v-for="card in cards" :key="card.text" ref="fadeIn">
                <div class="card-logo">
                    <img :src="card.imgSrc" alt="logo">
                </div>
                <p class="card-text">{{ card.text }}</p>
                <button class="card-btn btn">Find out more</button>
            </a>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            cards: []
        }
    },
    methods: {
        async getCards() {
            const res = await axios.get('http://localhost:8080/data.json');
            this.cards = res.data.cards;
        },
        fadeInCards() {
            const faders = this.$refs.fadeIn;
            const appearOptions = {
                rootMargin: "0px 0px 100px 0px"
            };
            const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
                entries.forEach(entry => {
                    if(!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target);
                    }
                });
            }, appearOptions);

            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        }
    }, 
    created() {
        this.getCards();
    },
    updated() {
        this.fadeInCards();
    }
}
</script>
<style lang="scss">
@import "@/scss/resources.scss";
.about-container {
    padding: 0 50px;
    position: relative;
    z-index: 20;

    .about-title {
        @include font($font-size: 42px, $color: $primary-color, $text-transform: uppercase);
        display: block;
        margin: auto;
        text-align: center;
        padding: 50px 0;
    }

    .cards-container {
        padding-bottom: 50px;
        flex-wrap: wrap;
    }

    .card {
        width: 30%;
        padding: 30px;
        background: lightgray;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: all 300ms ease-in-out;

        &-logo {
            width: 30%;

            img {
                width: 100%;
            }
        }

        &-text {
            @include font($font-size: 18px, $color: $primary-color, $text-transform: uppercase, $text-align: center);
            padding: 30px 0 10px;
        }

        &-btn {
            @include font($font-size: 18px, $color: $default-color, $line-height: 1.2);
            background-image: linear-gradient(to top right, $third-color, $fifth-color);
            padding: 5px 40px 7px;

            @include on_event {
                box-shadow: 0 0 55px 0px rgba(255, 255, 255, .5);
            }
        }

        &-1 {
            background: url('../assets/doctor.png') top/cover no-repeat;
        }

        &-2 {
            background: url('../assets/assistant.png') top/cover no-repeat;
        }

        &-3 {
            background: url('../assets/register.png') top/cover no-repeat;
        }

        @include on_event {
            box-shadow: 0 0 25px 0px rgba(0, 0, 0, .2);
        }
    }
}

.fade-in {
    @include prefix(transform, translateY(200px), webkit moz ms o);
    opacity: 0;
    transition: opacity 400ms ease-in, transform 500ms ease-in;

    &.appear {
        @include prefix(transform, translateY(0), webkit moz ms o);
        opacity: 1;
    }
}


@media screen and (max-width: 991px) {
    .about-container {
        .about-title {
            font-size: 36px;
            padding: 30px 0;
        }

        .cards-container {
            padding-bottom: 30px;
        }

        .card {
            width: 31%;
            padding: 20px;

            &-logo {
                width: 25%;
            }

            &-text {
                font-size: 16px;
                padding: 20px 0 10px;
            }

            &-btn {
                font-size: 16px;
                padding: 5px 20px 7px;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .about-container {
        padding: 0 25px;

        .about-title {
            font-size: 28px;
        }

        .cards-container {
            padding-bottom: 30px;
        }

        .card {
            padding: 30px 15px;

            &-logo {
                width: 15%;
            }

            &-text {
                font-size: 14px;
                padding: 10px 0 10px;
                margin: 0;
            }

            &-btn {
                padding: 5px 15px 7px;
                font-size: 14px;
            }
        }
    }
}

@media screen and (max-width: 550px) {
    .about-container {
        .about-title {
            font-size: 21px;
        }

        .cards-container {
            padding-bottom: 0;
        }

        .card {
            width: 100%;
            padding: 30px;
            margin-bottom: 15px;

            &-logo {
                width: 15%;
            }

            &-text {
                font-size: 16px;
                padding: 20px 0 ;
                margin: 0;
            }

            &-btn {
                padding: 5px 30px 7px;
                font-size: 16px;
            }
        }
    }
}
</style>
