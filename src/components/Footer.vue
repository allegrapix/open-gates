<template>
    <div class="footer-container">
        <div class="overlay-logo">
            <img src="@/assets/footer_logo.png" alt="top class medical">
        </div>
        <div class="footer-text-container">
            <div class="banner-logo">
                Top Class Medical
                <div class="banner-logo-img">
                    <img src="@/assets/open_gates_month_color.png" alt="top class medical">
                </div>
            </div>
            <h1 class="banner-title">Open Gates Month</h1>
            <p>© Allegrapix</p>
        </div>
    </div>
</template>
<style lang="scss">
@import "@/scss/resources.scss";
.footer-container {
    @include position(absolute, null, 0, 0, 0,);
    background: url('../assets/hospital.png') top/cover no-repeat;
    padding: 120px 50px;

    .overlay-logo {
        @include position(absolute, null, 0, -10px, 55%);

        img {
            width: 100%;
            mix-blend-mode: overlay;
        }
    }

    .footer-text-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .banner-title {
            font-size: 28px;
            padding: 0 0 10px;
        }
    }
}

@media screen and (max-width: 776px) {
    .footer-container {
        padding: 100px 25px 75px;
    }
}
</style>
