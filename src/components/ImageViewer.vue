<template>
    <div>
        <!-- directive -->
        <div class="images" v-viewer="{inline:true}">
            <img v-for="src in images" :key="src" :src="src">
        </div>
        <!-- api -->
        <button type="button" @click="show">Click to show</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            images: [
                "https://picsum.photos/200/200",
                "https://picsum.photos/300/200",
                "https://picsum.photos/250/200"
            ]
        };
    },
    methods: {
        show() {
            this.$viewerApi({
                images: this.images,
            })
        },
    },
})
</script>