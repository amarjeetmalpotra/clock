const secNeed = document.querySelector('.second-needle'),
	minNeed = document.querySelector('.minute-needle'),
	houNeed = document.querySelector('.hour-needle'),
	time = document.querySelector('.time'),
	// For counting rotations
	count = [0, 0, 0],
	// For saving previous degrees
	prev = [0, 0, 0];
// Update clock every 1000ms
setInterval(() => {
	const date = new Date(),
		sec = date.getSeconds(),
		min = date.getMinutes(),
		hou = date.getHours(),
		secDeg = (360 / 60) * sec,
		minDeg = (360 / 60) * ((min % 60) + sec / 60),
		houDeg = (360 / 12) * ((hou % 12) + min / 60);
	// Check if needle goes to zero then increase the counter
	if (prev[0]) {
		if (secDeg < prev[0]) {
			count[0] += 1;
		}
		if (minDeg < prev[1]) {
			count[1] += 1;
		}
		if (houDeg < prev[2]) {
			count[2] += 1;
		}
	}
	// Update previous with current degrees
	prev[0] = secDeg;
	prev[1] = minDeg;
	prev[2] = houDeg;
	// Apply rotations
	secNeed.style.transform =
		'translate(148px, 15px) rotate(' + (secDeg + 360 * count[0]) + 'deg)';
	minNeed.style.transform =
		'translate(146.5px, 30px) rotate(' + (minDeg + 360 * count[1]) + 'deg)';
	houNeed.style.transform =
		'translate(145.5px, 60px) rotate(' + (houDeg + 360 * count[2]) + 'deg)';
	// Update digital time
	time.innerHTML =
		hou.toString().padStart(2, 0) +
		':' +
		min.toString().padStart(2, 0) +
		':' +
		sec.toString().padStart(2, 0);
}, 1000);
