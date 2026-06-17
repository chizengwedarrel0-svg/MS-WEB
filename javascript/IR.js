/*This will be very worth it ;)
If this faah sound doesn't stop, I'm gonna do something (noob)*/ 

const FolderLocation = './images/Pop-Up-Gallery'

image_array = [
    'Art.jpg',
    'Art2.jpg',
    'Art3.jpg',
    'Art4.jpg',
    'Art5.jpg',
]

function get_random_image() {
  const random_index = Math.floor(Math.random() * image_array.length);
  const selected_image = image_array[random_index];

    document.querySelector('.background').style.backgroundImage = `url('${FolderLocation}/${selected_image}')`

}

window.onload = get_random_image;