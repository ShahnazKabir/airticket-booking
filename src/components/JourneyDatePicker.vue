<template>
  <div class="dateDiv">
    <label class="textLabel" for="flyfrom">Flying From:</label><br>
    <input class="textField" type="date" id="flyfrom" name="flyfrom"><br>
  </div>
</template>

<script>
export default {
name: "JourneyDatePicker"
}
</script>

<style scoped>
.dateDiv {
  text-align: left;
  margin-left: 2%;
  width: 45%;
}

input {
  /*position: relative;*/
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
</style>
