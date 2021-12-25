var textWrapper = document.querySelector('.content');

anime.timeline({loop: true})
.add({
    targets: '.content',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 20 * (i+1)
})
.add({
    targets: '.content',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
});
