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
</style>
