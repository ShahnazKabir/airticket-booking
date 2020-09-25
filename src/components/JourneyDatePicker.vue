<template>
  <div class="dateDiv">
    <label class="textLabel" for="flyfrom" v-if="dateStatus">Return:</label>
    <label class="textLabel" for="flyfrom" v-else>Depart:</label><br>
    <input class="textField" v-model="journeyDate" @input="onChange" type="date" id="flyfrom" name="flyfrom"><br>
  </div>
</template>

<script>
export default {
  props: {
    dateStatus: {
      type: Boolean,
    },
  },
name: "JourneyDatePicker",
data() {
  return {
    journeyDate : null
  };
},
methods : {
  onChange(e) {
    if (this.props.dateStatus) {
      localStorage.setItem('depart', e.target.value)
    } else {
      localStorage.setItem('return', e.target.value)
    }
  }
}
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
