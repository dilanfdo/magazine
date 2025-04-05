<template>
  <div class="flipbook-wrapper">
    <div ref="flipbook" class="flipbook"></div>

    <!-- <div class="controls">
      <button @click="flipLeft" :disabled="!canFlipLeft" class="btn left">
        ◀
      </button>
      <button @click="flipRight" :disabled="!canFlipRight" class="btn right">
        ▶
      </button>
    </div> -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { PageFlip } from "page-flip";

export default {
  setup() {
    const flipbook = ref(null);
    let flipInstance = null;

    const pages = [
      "/images/01.jpg",
      "/images/02.jpg",
      "/images/03.jpg",
      "/images/04.jpg",
      "/images/05.jpg",
      "/images/06.jpg",
      "/images/07.jpg",
      "/images/08.jpg",
      "/images/09.jpg",
      "/images/10.jpg",
    ];

    onMounted(() => {
      flipInstance = new PageFlip(flipbook.value, {
        width: 504,     // Half screen for two-page mode
        height: 680, // Adjust height slightly smaller than full
        maxShadowOpacity: 0.5,
        mobileScrollSupport: true,
        showCover: true,
        useMouseEvents: true,
        autoSize: true,
        startPage: 0
        // mode: 'double',
      });

      flipInstance.loadFromImages(pages);
    });

    return {
      flipbook,
      flipLeft: () => flipInstance.flipPrev(),
      flipRight: () => flipInstance.flipNext(),
      canFlipLeft: () => flipInstance?.canGoBack(),
      canFlipRight: () => flipInstance?.canGoForward(),
    };
  },
};
</script>

<style scoped>
.flipbook-wrapper {
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  /* background: radial-gradient(circle, #222, #111); */
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.flipbook {
  /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); */
  border-radius: 10px;
  /* background: black; */
  overflow: hidden;
}

/* Fix Button Alignment */
.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

/* Modern Button Design */
.btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 14px 20px;
  font-size: 22px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

/* Hover & Active Effects */
.btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.btn:active {
  transform: scale(0.95);
}

/* Disable Button */
.btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
