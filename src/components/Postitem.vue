<template>
    <div class="post">
        <div class="post__header">
            <img src="https://daryo.uz/static/2022/12/medium-sorovnoma-1.jpg" alt="">
            <div class="header__cat">
                <span>|</span>
                <span class="cat__name">MAHALLIY</span>
            </div>
            <h4>2022-yil Siz uchun qanday o'tdi !</h4>
        </div>
        <div class="post__date">
            <span>2022.12.31</span>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.post {
    width: 400px;
    padding: 10px;
    transition: all 0.5s ease-in-out;
}

.post:hover {
    -webkit-box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
}

.header__cat {
    display: flex;
    gap: 10px;
}

.cat__name {
    color: #b7b7b7;
    cursor: pointer;
}

.post__header img {
    width: 100%;
    height: 50%;
    object-fit: contain;
}

.post__header h4 {
    font-size: 12px;
}

.post__date span {
    color: #b7b7b7;
}
</style>