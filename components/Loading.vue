<template>
    <!-- <div class="pacifico-regular loading-screen fade-color"> -->
    <div class="jua-regular loading-screen loading-text">
        <p style="width: 100%; font-size: 32px; font-weight: bold;">Loading</p>
    </div>
</template>

<style scoped>
.loading-screen {
    position: fixed;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    left: 72px;
    top: 72px;
    width: calc(100% - (72px * 2));
    height: calc(100vh - 72px);
    padding-top: 18%;
}

@keyframes fadeInGrowColor {
  0% {
    opacity: 0;
    transform: scale(0.9);
    color: white;
  }
  30% {
    opacity: 1;
    transform: scale(1);
    color: #87CEEB;
  }
  50% {
    transform: scale(1) rotate(-1deg);
    color: white;
  }
  70% {
    transform: scale(1);
    color: #87CEEB;
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
    color: white;
  }
}

.loading-text {
  /* animation: fadeInGrowColor 1s ease-in-out forwards; */
  animation: fadeInGrowColor 1s ease-in-out infinite alternate;
}
</style>