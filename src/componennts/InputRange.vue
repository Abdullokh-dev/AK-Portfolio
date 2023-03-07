<script setup>
defineProps({
  progress: Number,
})
</script>

<template>
  <div class="text-end pe-5 percentage"> {{progress}}% </div>
  <div class="progress-container m-0">
    <div class="progress" :style="{width: progress + '%'}"></div>
  </div>
</template>

<style scoped>
/* Progress */
.progress-container {
  background: #FFA97A80;
  border-radius: 5px;
  height: 4px;
  width: 82%;
  box-shadow: 0 0 5px 0 #FFA97A80;
}

.progress {
  background: var(--my-orange);
  border-radius: 5px;
  height: 100%;
  transition: width 0.1s linear;
  box-shadow: 0 0 5px 0 #FFA97A;
}

.percentage {
  font-size: 10px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #767676;
}

</style>
