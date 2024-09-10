const slider = document.getElementById('number-slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
});
