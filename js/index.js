const hours = +prompt('Enter hours');
const seconds = hours * 3600;

if (hours === 0 || isNaN(hours)) {
    alert('Please, enter hours')
} else {
    alert (`In ${hours} hours ${seconds} seconds.`)
}
