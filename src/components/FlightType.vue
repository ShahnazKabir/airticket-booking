<template>
  <div class="typeDiv">
    <label class="textLabel" for="flyfrom">Flying From:</label><br>
    <input class="textField" type="text" onfocus="showPopup" id="flyfrom" name="flyfrom"><br>

  </div>
</template>

<script>
export default {
name: "FlightType",
data() {
  return {
    adultNo : null,
    childNo : null,
    totalPerson: null,
    flightClass : null,
    formShow : false,
  }
},
methods: {
  handleClickOutside() {
     if(this.formShow) {
       this.formShow = false
     }
  },
  showPopup() {
    if(!this.formShow) {
      this.formShow = true
    }
  }
}
}
</script>

<style scoped>
.typeDiv {
  text-align: left;
  width: 92%;
}
</style>
