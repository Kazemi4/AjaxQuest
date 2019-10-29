// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
   
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chuck) {
        console.log('data decoded from JSON:', chuck);
  
        // Build a block of HTML
        const indexHtml = `
       
          <img src="${chuck.icon_url}" />
          <p><strong>${chuck.value}</strong></p>
        `;
        document.querySelector('#chuck-norris').innerHTML = indexHtml;
      });
  }
  
  fetchPokemonJSON();