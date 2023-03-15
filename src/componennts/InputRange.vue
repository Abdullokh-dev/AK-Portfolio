<script setup>
defineProps({
  progress: String,
})
</script>

<template>
  <div class="text-end pe-5 me-2 percentage"> {{progress}}% </div>

  <div class="progress" role="progressbar" aria-label="experience percentage" :aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated" :style="{width: progress + '%'}"></div>
  </div>
</template>

<style scoped>
.progress {
  height: 4px;
  background-color: #FFA97A80;
  box-shadow: 0 0 5px 0 #FFA97A80;
  width: 87%;
}

.progress-bar-striped {
  background-color: #ffa97a;
  box-shadow: 0 0 5px 0 #FFA97A;
  height: 4px;
  border-radius: 2px;
}

.percentage {
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #767676;
}
</style>
