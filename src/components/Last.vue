<template>
    <div class="last__item">
        <div class="last__item__date">
            <span>|</span>
            <span>Bugun 11:55</span>
        </div>
        <div class="last__item-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus laborum voluptatem esse fugiat,
            ad doloremque quisquam voluptates dolorem minus omnis, explicabo dignissimos. Facilis libero, similique
            obcaecati assumenda quisquam natus!
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.last__item {
    padding: 15px;
    transition: 0.2s ease-in-out;
}
.last__item:hover {
    background-color: #f1f1f1;
}
.last__item__date{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.last__item-name {
    margin-top: 5px;
    font-size: 12px;
}
</style>