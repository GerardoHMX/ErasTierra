
document.addEventListener('DOMContentLoaded', () => {
    
    const closeTooltip = document.getElementById('closeTooltip');
    const tooltipTitle = document.getElementById('tooltipTitle');
    const tooltipImage = document.getElementById('tooltipImage');
    const tooltipText = document.getElementById('tooltipText'); 

    document.querySelectorAll('.punto-informativo').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const key = e.target.getAttribute('tooltip-key');
            showTooltip(e.clientX, e.clientY, key);
        });
    });
    document.querySelectorAll('.punto-relevante').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const key = e.target.getAttribute('tooltip-key');
            showTooltip(e.clientX, e.clientY, key);
        });
    });

    closeTooltip.addEventListener('click', hideTooltip);

    document.addEventListener('click', (e) => {
        if (!customTooltip.contains(e.target) && !(e.target.classList.contains('punto-relevante') || e.target.classList.contains('punto-informativo'))) {
            hideTooltip();
        }
    });

    function showTooltip(x, y, text) {
        const customTooltip = document.getElementById('customTooltip');
        const data = historiaGeologica[text];
        let information = '';
        tooltipImage.src = '';
        tooltipImage.style.display = 'none'; 
        if(data.titulo){
            tooltipTitle.textContent = data.titulo;
        }   
        if(data.periodo){
            information += `<p><span>Periodo:</span>${data.periodo}</p>`;
        }
        if(data.clima){
            information += `<p><span>Clima:</span>${data.clima}</p>`;
        }
        if(data.tectonica){
            information += `<p><span>Tectonica:</span>${data.tectonica}</p>`;
        }
        if(data.biota){
            information += `<p><span>Biota:</span>${data.biota}</p>`;
        }
        if(data.datoCurioso){
            information += `<p>${data.datoCurioso}</p>`;
        }
        if(data.imagen){    
            tooltipImage.style.display = 'block'; 
            tooltipImage.src = data.imagen;
        }
        if(data.descripcion){
            tooltipText.textContent = data.descripcion;
        }else{
            tooltipText.innerHTML = information;
        }
        if(data.backgroundColor){
            customTooltip.style.backgroundColor = data.backgroundColor;
        }        
        customTooltip.style.display = 'block';
        const tooltipRect = customTooltip.getBoundingClientRect();
        let left = x + + window.scrollX;
        let top = y + window.scrollY;

        if (left + tooltipRect.width > window.innerWidth ) {
            left = left - tooltipRect.width - 10;
        }

        if (top + tooltipRect.height > window.innerHeight ) {
            top = y - tooltipRect.height - 10;
        }

        customTooltip.style.left = `${left}px`;
        customTooltip.style.top = `${top}px`;        
    }

    function hideTooltip() {
        customTooltip.style.display = 'none';
    }

});
