<template>
  <div class="flightInput">
    <label class="textLabel" for="flyfrom">Flying From:</label><br>
    <div class="autocomplete">
      <input
          list="autocomplete-results"
          type="text"
          class="textField"
          id="flyfrom"
          name="flyfrom"
          placeholder="Airport"
          @input="onChange"
          v-model="search"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
      />
      <datalist
          tabindex="-1"
          id="autocomplete-results"
          v-if="isOpen"
          class="autocomplete-results"
      >
        <option
            style="white-space: pre-wrap"
            tabindex="0"
            v-for="(result, i) in results"
            :key="i"
            @click="setResult(result)"
            class="autocomplete-result"
            :class="{ 'is-active': i === arrowCounter }"
        >
          {{concatOutput(result.iata, result.country.name, result.name)}}
        </option>
      </datalist>
    </div>
  </div>
</template>

<script>
import http from '../http-common'
export default {
name: "SearchAirport",
  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: 0,
    };
  },


  methods: {
    onChange(e) {
      // Let's warn the parent that a change was made
      this.$emit('input', this);
      // Let's  our flat array
      this.filterResults(e.target.value);
      this.isOpen = true;
    },

    filterResults(searchInput) {
      // first uncapitalize all the things
      // let vue = this
      http.get('?term=' + searchInput)
      .then((res) => {
        this.results = res.data.airports ? res.data.airports.filter((item) => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        }) : null;
        console.log(this.results)
      });
    },

    concatOutput(abr, country, name) {
      return abr + '   ' + country + "<br>" + name
    },

    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },

    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },

    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter -1;
      }
    },

    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },

  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.flightInput {
  text-align: left;
}
.autocomplete {
  position: relative;
  z-index: 999;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: auto;
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4AAE9B;
  color: white;
}
</style>
