<template>
    <Navbar />
    <div class="single__container">
        <LastItem />
        <div class="single">
            <img src="https://daryo.uz/static/2022/12/medium-sorovnoma-1.jpg" alt="">
            <div class="post__info">
                <h5>2022-yil siz uchun qanday o'tdi ?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas porro. Alias tenetur sit quam
                    blanditiis est ducimus, perferendis itaque modi vero recusandae magni, eveniet soluta voluptate
                    nostrum qui doloribus.</p>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import LastItem from "../components/LastItem.vue"
export default {
    components: {
        Navbar,
        LastItem
    }
}
</script>
<style>
.single__container {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.single {
    flex: 9;
}

.last {
    flex: 4;
}

.post__info {
    font-size: 12px;
    margin: 20px 20px;
}
</style>