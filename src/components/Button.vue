<template>
    <button class="lv-button" @click="count++">
      Count is: {{ count }}
    </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped>
.lv-button{
  color: #00233C;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  border-radius: 12px;
  border: 1px solid #00233C;
  padding: 16px;
  height: 58px;
}  
.lv-button:hover {
  text-decoration: none;
  background-color: #dfdddd;
}  
</style>