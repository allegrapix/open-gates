<template>
    <div class="flex-between-center header-container">
        <div class="logo-container">
            <div class="logo">
                Top Class Medical
                <div class="logo-img">
                    <img src="@/assets/open_gates_month_white.png" alt="open gates logo">
                </div>
            </div>
        </div>
        <div class="header-links-container" ref="headerLinksContainer">
            <button @click="openCloseMenu" class="burger-menu" ref="burgerMenu">
                <span class="bar bar-1"></span>
                <span class="bar bar-2"></span>
                <span class="bar bar-3"></span>
            </button>
            <ul class="flex-end header-links" ref="headerLinks">
                <transition name="fade" appear mode="out-in">
                    <router-link to="/" tag="li" class="header-link" active-class="active" exact ref="headerLink"><a>Home<span class="underline-1"></span></a></router-link>
                </transition>
                <transition name="fade" appear mode="out-in">
                    <router-link to="/contact" tag="li" class="header-link" active-class="active" exact ref="headerLink"><a>Contact<span class="underline-1"></span></a></router-link>
                </transition>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        openCloseMenu() {
            if(this.header.classList.contains('open')) {
                this.header.classList.remove('open');
            } else {
                this.header.classList.add('open');
            }            
        }
    },
    computed: {
        burgerBtn() {
            return this.$refs.burgerMenu;
        },
        header() {
            return this.$refs.headerLinksContainer;
        },
        links() {
            return Array.from(this.$refs.headerLinks.children);
        }
    },
    mounted() {
        this.links.forEach(link => {
            link.addEventListener('click', () => {
                this.header.classList.remove('open');
            })
        })
    }
}
</script>

<style lang="scss">
@import "@/scss/resources.scss";

.header-container {
    color: $default-color;
    background: $primary-color;
    width: 100%;
    padding: 15px 50px;

    .burger-menu {
        display: none;
    }

    .logo-container {
        font-size: 18px;

        .logo {
            position: relative;
            
            .logo-img {
                @include position(absolute, -5px, -25px, null, null);
                width: 20px;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

    .header-links-container {
        width: 30%;
        
        .header-link {
            padding: 0 30px;

            a {
                @include font($font-size: 18px, $color: $default-color, $font-weight: 700);
                position: relative;

                .underline-1 {
                    @include position(absolute, null, null, -5px, 0);
                    @include border-radius(1px);
                    width: 0;
                    height: 1px;
                    background: $default-color;
                    background-image: linear-gradient(to left, $primary-color, $default-color, $primary-color);
                    opacity: .9;
                    transition: all 200ms ease-in-out;
                }

                @include on_event {
                    .underline-1 {
                        background-image: linear-gradient(to left, $default-color, $default-color, $default-color);
                        width: 100%;
                    }
                }
            }

            .active {
                 .underline-1 {
                    width: 100%;
                }                
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .header-container {
        padding: 15px 25px;
        position: relative;

        .logo-container {
            align-self: flex-start;
        }

        .burger-menu {
            @include size (20px, 40px);
            display: block;
            position: relative;
            border: none;
            background: none;
            outline: none;
            float: right;

            .bar {
                @include position(absolute, 0, 0, null, 0);
                @include border-radius(1px);
                height: 3px;
                background: $default-color;
                transition: all 200ms ease-in-out;

                &-2 {
                    top: 9px;
                }

                &-3 {
                    top: 18px;
                }
            }
        }  
        
        .flex-between-center {
            justify-content: flex-start;
            align-items: flex-start;
        }        

        .flex-end {
            justify-content: flex-start;
            align-items: flex-end;
            flex-direction: column;
        }

        .header-links-container {
            .header-links {
                @include position(absolute, 100%, 0, null, 0);
                @include prefix(transform, scale(1,0), webkit moz ms o);
                transform-origin: top;
                background: $primary-color;
                transition: all 200ms ease-in-out;
                z-index: 10;

                .header-link {
                    @include prefix(transform, scale(0,0), webkit moz ms o);
                    padding: 15px 25px;
                    transition: all 300ms ease-in-out;
                    transform-origin: center;
                }
            }


            &.open {
                .bar {
                    &-1 {
                        @include position(absolute, 9px, 0, null, 0);
                        @include prefix(transform, rotate(45deg), webkit moz ms o);
                    }    

                    &-2 {
                        @include prefix(transform, rotate(-45deg), webkit moz ms o);
                    }

                    &-3 {
                        opacity: 0;
                    }
                }

                .header-links {
                    @include prefix(transform, scale(1,1), webkit moz ms o);

                    .header-link {
                        @include prefix(transform, scale(1,1), webkit moz ms o);
                        padding: 15px 25px;
                    }
                }
            }
        }

        .hideMenu {
            @include prefix(transform, scale(0,0), webkit moz ms o);            
            transform-origin: 100% 50px;
        }

        .showMenu {
            @include prefix(transform, scale(1,1), webkit moz ms o);
            transform-origin: 100% 50px;
        } 
    }
}
</style>
