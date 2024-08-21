document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('.circle');
    
    const x = e.clientX;
    const y = e.clientY;
    
    setTimeout(() => {
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }); 
});
