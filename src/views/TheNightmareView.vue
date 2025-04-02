<script setup lang="ts">

const message = 'I am the nightmare of every backend developer! 😱'
const anotherDiv = 'Another div 😢'
const yetAnotherDiv = 'Yet another div 😭😭'

</script>

<template>
  <div class="nightmare">
    <h1>{{ message }}</h1>
    <h2>{{ anotherDiv }} </h2>
    <h2>{{ yetAnotherDiv }} </h2>
  </div>
</template>

<style lang="scss" scoped>
$three-quarters: 75%;
$half: 50%;
$fourth: 25%;

.nightmare {
  height: 300px;
  padding: 20px;

  background-color: grey;

  h1 {
    color: #333;
    font-size: 1.5rem;
    background-color: red;
    width: $three-quarters;
  }

  h2:nth-child(even) {
    background-color: green;
    width: $fourth;
  }

  h2:nth-child(odd) {
    background-color: blue;
    width: $half;
  }
}
</style>
