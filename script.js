document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoia290emlhYmFzc2lzIiwiYSI6ImNrOGx2N3VleDA2ZTYzZm8ycWU4cDBwMG4ifQ.nidy7tkxWzA60m1YFA55bQ'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10?optimize=true',
      center: [9.431, 48.959],
      zoom: 14,
      minZoom: 8,
      maxZoom: 18,
    })

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Frontida Pflegedienst Backnang'
    )

    const marker = new mapboxgl.Marker({ color: '#2664ad' })
      .setLngLat([9.431, 48.959])
      .setPopup(popup)
      .addTo(map)
  }, 2000)
})

const closeMenu = () => {
  setTimeout(() => {
    document.querySelector('#overlay-input').click()
  }, 200)
}
