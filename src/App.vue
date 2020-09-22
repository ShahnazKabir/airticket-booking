<template>
  <div id="app">
    <FormComponent></FormComponent>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent";

export default {
  name: 'App',
  components: {
    FormComponent
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: DodgerBlue;
  margin: 1%;
  box-sizing: border-box;
}


.column {
  float: left;
  width: 100%;
  padding: 10px;
}

.column2{
  width: 100%;
  float: left;
  display: inline-flex;
}

.row {
  width: 100%;
  display: inline-flex;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.icon {
  padding: 2%;
  color: white;
  text-align: left;
}

.icon2 {
  color: white;
  text-align: left;
  padding-left: 2.5%;
}

.textLabel {
  color: white;
}

.textField {
  border: none;
  border-bottom: 2px solid white;
  background-color: dodgerblue;
  width: 90%;
}

</style>
