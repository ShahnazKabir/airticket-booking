<template>
  <Form autocomplete="off" onSubmit="searchFlight">
    <div>
      <div class="row">
        <div class="icon">
          <i class="fa fa-plane"></i>
        </div>
        <div class="column">
          <SearchAirport v-bind:airportStatus="airportStatus"></SearchAirport>
        </div>
        <div class="column">
          <SearchAirport v-bind:airportStatus="!airportStatus"></SearchAirport>
        </div>
      </div>
      <div class="icon2">
        <i class="fa fa-ellipsis-v"></i>
      </div>
      <div class="row">
        <div class="icon">
          <i class="fa fa-calendar-o"></i>
        </div>
        <div class="column2">
          <JourneyDatePicker v-bind:dateStatus="dateStatus"></JourneyDatePicker>
          <JourneyDatePicker v-bind:dateStatus="!dateStatus"></JourneyDatePicker>
        </div>
        <div class="column">
          <div class="row">
            <div class="column2"> <div class="icon">
              <i class="fa fa-users icon"></i>
            </div>
              <FlightType></FlightType></div>
          </div>
        </div>
      </div>
      <input type="submit" value="Submit" class="submitButton">
    </div>
  </Form>
</template>

<script>
import SearchAirport from './SearchAirport'
import FlightType from "./FlightType";
import JourneyDatePicker from "./JourneyDatePicker";

export default {
  name: 'FormComponent',
  data() {
    return {
      airportStatus: false,
      dateStatus: false,
    };
  },
  components: {
    SearchAirport,
    FlightType,
    JourneyDatePicker
  },
  methods: {
    searchFlight(e) {
      e.preventDefault()
      console.log('Flight Form',localStorage.getItem('flightForm'))
      console.log('Flight To',localStorage.getItem('flightTo'))
      console.log('Depart',localStorage.getItem('depart'))
      console.log('Return',localStorage.getItem('return'))
    }
  }
}
</script>

<style>
.submitButton {
  height: 30px;
  width: 100px;
  border: none;
  color: dodgerblue;
  margin-bottom: 1%;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: .5; /* Firefox */
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
  border: none !important;
  border-bottom: 2px solid white !important;
  background-color: dodgerblue;
  width: 90%;
  color: white;
}

.textField::-webkit-calendar-picker-indicator {
  opacity:0;
  -webkit-appearance: none;
}

</style>
