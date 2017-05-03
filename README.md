# Front-end_level2
The solution for my Front-end level 2 final

On the HTML part,  the site has a controller input, buttons for JavaScript, a gallery, a form and a SVG element.
The CSS follows a purple theme, the buttons are with rounded courners.

The input in the beggining controls the background color of the main content. On focusing out of the input, it takes the value in it and sets it as background color.
 
The gallery is rendered via JavaScript. It takes an array with information from localStorage and if there's nothing saved on that key, it loads a default array. The array contains the source of the image and if the image has likes or not. Buttons change the currently displayed image in the gallery and the star, which indicates if it's liked. On request to view the previous picture, and if there's no previous value in the array, the image to be show is the last from the array. On request to view the next picture, and if there's no next value in the array, the image to be show is the first from the array. Another button lets the user add a new image to the gallery. The function has a validation in case the user enters a blank field. The new image has no likes by default.

Every time the gallery image is rendered or the likes of an image have been changed a function saves the information array to the local storage.
