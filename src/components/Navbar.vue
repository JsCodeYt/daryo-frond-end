<template>
    <div class="navbar">
        <div class="navbar__left">
            <a href="/">
                <img src="https://daryo.uz/logo/logo.svg" alt="">
            </a>
        </div>
        <div class="navbar__center">
            <ul class="center__items">
                <li class="center__item">
                    <span class="active">|</span>
                    <span>MAHALLIY</span>
                </li>
                <li class="center__item">
                    <span class="active">|</span>
                    <span>DUNYO</span>
                </li>
                <li class="center__item">
                    <span class="active">|</span>
                    <span>PUL</span>
                </li>
                <li class="center__item">
                    <span class="active">|</span>
                    <span>MADANIYAT</span>
                </li>
                <li class="center__item">
                    <span class="active">|</span>
                    <span>LAYFSTAYL</span>
                </li>
                <li class="center__item">
                    <span class="active">|</span>
                    <span>SPORT</span>
                </li>
            </ul>
        </div>
        <div class="navbar__right">
            <span class="material-symbols-outlined search__icon">
                search
            </span>
            <span>UZB</span>
            <span class="material-symbols-outlined search__icon" @click="isNew">
                videocam
            </span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        isNew() {
        }
    }
}
</script>
<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 15px 0px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
}

.navbar__left img {
    width: 160px;
}

.navbar__left img.scroll {
    width: 120px;
    padding: 0px;
}

.navbar__center ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
}

.active {
    color: #9fdfff;
}

.center__item {
    cursor: pointer;
    font-size: 14px;
}

.navbar__icon {
    font-size: 30px;
    cursor: pointer;
}

.navbar__right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.search__icon {
    cursor: pointer;
}
</style>