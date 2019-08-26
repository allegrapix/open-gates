<template>
    <div class="details-container">
        <div class="details-text-container clearfix" v-for="detail in details" :key="detail.id" :class="detail.detailClass" :id="detail.anchor">
            <div class="details-img gradient-bgr slide-in" :class="detail.observerClassImg">
                <img :src="detail.imgSrc" alt="open gates">
            </div>            
            <div class="gradient-bgr text-container slide-in" :class="[detail.floatClass, detail.observerClassText]">
                <p class="details-title">{{ detail.title }}</p>
                <p class="details-text">{{ detail.text }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            details: []
        }
    },
    methods: {
        async getDetails() {
        const res = await axios.get('http://localhost:8080//data.json');
        this.details = res.data.details;
        },
        slideInCards() {
            const sliders = document.querySelectorAll('.slide-in');
            const slideOptions = {
                treshold: 1
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
            }, slideOptions);

            sliders.forEach(slider => {
                appearOnScroll.observe(slider);
            });
        }        
    }, 
    created() {
        this.getDetails()
    },
    updated() {
        this.slideInCards();
    }
}
</script>
<style lang="scss">
@import "@/scss/resources.scss";
.details-container {
    padding: 0 50px;
    position: relative;
    z-index: 20;

    .details-text-container {
        position: relative;
        margin: 100px 0 200px;

        .text-container  {
            position: relative;
            padding: 75px 50px;
            width: 70%;
        }

        .details-title {
            @include font($font-family: $secondary-font, $font-size: 24px, $font-weight: 700);
        }

        .details-text {
            @include font($font-family: $primary-font, $font-size: 21px);
        }
    }

    .detail-left {
        .float-left {
            float: left;
            position: relative;
            box-shadow: -50px 30px $primary-color; 
        }

        .details-img {
            @include position(absolute, -70px, 0, 30px, 50%);
            overflow: hidden;
            z-index: -1;

            img {
                width: 100%; 
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .detail-right {
        .float-right {
            float: right;
            box-shadow: 50px 30px $primary-color;
        }

        .details-img {
            @include position(absolute, -70px, 50%, 20px, 0);
            overflow: hidden;
            z-index: -1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.from-left {
    @include prefix(transform, translateX(-50%), webkit moz ms o);
}

.from-right {
    @include prefix(transform, translateX(50%), webkit moz ms o);
}

.from-left,
.from-right {
    transition: all 400ms ease-in;
    opacity: 0;

    &.appear {
        @include prefix(transform, translateX(0), webkit moz ms o);
        opacity: 1;
    }
}

@media screen and (max-width: 991px) {
    .details-container {
        .details-text-container {
            .text-container  {
                padding: 50px;
            }

            .details-title {
                font-size: 21px;
            }

            .details-text {
                font-size: 18px;
            }
        }
    }
}

@media screen and (max-width: 767px)  {
    .details-container {
        padding: 0;

        .details-text-container {
            margin: 0;

            .text-container  {
                width: 100%;
                padding: 40px 25px;
            }
        }

        .detail-left {
            .float-left {
                float: none;
                box-shadow: none;
            }

            .details-img {
                position: static;
                overflow: visible;
                width: 100%;
                height: 300px;
                z-index: -1;

                img {
                    width: 100%; 
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        .detail-right {
            .float-right {
                float: none;
                box-shadow: none;
            }

            .details-img {
                position: static;
                overflow: visible;
                width: 100%;
                height: 300px;
                z-index: -1;

                img {
                    width: 100%; 
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }

}
</style>
