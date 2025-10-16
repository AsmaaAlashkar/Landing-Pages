document.getElementById('year').textContent = new Date().getFullYear();


// Projects data (pulled from CV). You can edit or extend this list.
const projects = [
    {
        title: 'Home Food Delivery (Khaltabita)',
        desc: 'ITI graduation project. Angular + Web API + SQL Server. Worked on UI and checkout flows.',
        url: 'https://github.com/asmaa-alashkar/Khaltabita-ITI-GP.git',
        img: ''
    },
    {
        title: 'E-commerce Store Web App',
        desc: 'Responsive e-commerce using Angular, Tailwind CSS and Angular Material. Role-based auth and admin features.',
        url: 'https://github.com/AsmaaAlashkar/e-commerce-store-web-app.git',
        img: ''
    },
    {
        title: 'Basic Standards for Rounds and Inspections',
        desc: 'Hospital management system using Angular and .NET Core API.',
        url: 'https://github.com/AsmaAlashkar/BasicStandardsForRoundsAndInspectionsAngularUI.git',
        img: ''
    }
];
const projectsList = document.getElementById('projectsList');
projects.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
        <div class="card project-card card-compact h-100 shadow-sm border-0">
        <div style="height:160px;background:#f8f9fa;display:flex;align-items:center;justify-content:center;">
            <div class="text-center text-muted small">${p.title}</div>
        </div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text text-muted small">${p.desc}</p>
            <div class="mt-auto d-flex gap-2">
                <a class="btn btn-sm btn-outline-primary" href="${p.url}" target="_blank">View code</a>
            </div>
        </div>
    </div>
`;
    projectsList.appendChild(col);
});
// Simple mailto form
function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const message = document.getElementById('cMessage').value;
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:AsmaaAlashkar00@gmail.com?subject=${subject}&body=${body}`;
    return false;
}