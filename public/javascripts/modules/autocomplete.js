function autocomplete(input, latInput, lngInput) {
  if(!input) return;
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  //  If someone hits 'enter' on the address field. Prevent form submission
  input.on('keydown', (e) => { // we can use `on` because of the bling.js module
    if(e.keyCode === 13) e.preventDefault();
  })
}

export default autocomplete;
