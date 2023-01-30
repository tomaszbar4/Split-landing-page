const sides = document.querySelectorAll('.left-side, .right-side');

sides.forEach((side) => {
    side.addEventListener('mouseover', () => {
        side.classList.add('active');
    })
})

sides.forEach((side) => {
    side.addEventListener('mouseout', () => {
        side.classList.remove('active');
    })
})


