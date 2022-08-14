  <template>
    <div id="movie-container">
      Movie List

      <ul>
        <li style="color: white" v-for="(movie, index) in movies" :key="movie.id">
          Index: {{index}} {{movie.name}}
        </li>
      </ul>
    </div>
  </template>


  <script>

  export default {
    data() {
        return {
            movies: [
              {
                id: 1,
                name: 'Movie 1',
              },
              {
                id: 2,
                name: 'Movie 2',
              },
              {
                id: 3,
                name: 'Movie 3',
              },
              {
                id: 4,
                name: 'Movie 4',
              },
              {
                id: 5,
                name: 'Movie 5',
              },
            ]
        }
    }

  }

  </script>


  <style lang='scss' scoped>
  #movie-container {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    justify-content: center;
  }
  </style>