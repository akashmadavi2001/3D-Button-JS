let boxs = document.querySelectorAll('.box');

boxs.forEach(box => {
    box.addEventListener("click", () => {
        let active = document.querySelector('.active');
        
        // method 1
        // active?.classList.remove('active');

        //method 2
        if (active) {
            active.classList.remove('active');
        };
        box.classList.add('active');
    });
});
