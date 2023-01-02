<template>
    <div class="last">
        <div class="last__header">
            <span class="active">|</span>
            <span>So'nggi yangiliklarga o'tish</span>
            <span class="material-symbols-outlined">
                navigate_next
            </span>
        </div>
        <div class="last__bottom">
            <Last />
            <Last />
            <Last />
            <Last />
            <Last />
            <Last />
            <Last />
        </div>
    </div>
</template>
<script>
import Last from './Last.vue';

export default {
    components: { Last }
}
</script>
<style scoped>
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}

::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 14px none #ffffff;
    border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
}

::-webkit-scrollbar-thumb:active {
    background: #000000;
}

::-webkit-scrollbar-track {
    background: #666666;
    border: 17px none #ffffff;
    border-radius: 6px;
}

::-webkit-scrollbar-track:hover {
    background: #666666;
}

::-webkit-scrollbar-track:active {
    background: #333333;
}

::-webkit-scrollbar-corner {
    background: transparent;
}

.last__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding: 20px 0px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}

.last__header:hover {
    background-color: #000;
    color: #fff;
}

.active {
    color: blue;
}

.last__bottom {
    overflow: scroll;
    height: 100vh;
}
</style>