function downloadCV() { 
    const cvUrl = 'Muthulakshmi_CV.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Muthulakshmi_resume.pdf';
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 
}

function openProject(url) {
    window.open(url); 
}
