// Création d'un objet JSON
let contacts = [
    {
        'company': 'Transports de Savoie',
        'employees': [
            {
                'name': 'Hugo',
                'seniority': 5,
                'manager': true,
                'skills': [
                    'Angular', 'Full stack', 'Dreamveaver'
                ]
            }
        ]
    },
    {
        'company': 'CGI',
        'employees': [
            {
                'name': 'Mathieu',
                'manager': true,
                'skills': [
                    'Oracle', 'PL/SQL', 'PowerBuilder'
                ]
            },
            {
                'name': 'Thi Huyen',
                'seniority': 7,
                'skills': [
                    'Full stack', 'Python'
                ]
            }
        ]
    }
];

// Lister dans console nom et ancienneté des employés
for (company of contacts) {
    for (emp of company.employees) {
        // console.info(emp.name + ' ' + emp.seniority);
        // console.info(emp.name + ' ' + (emp.seniority === undefined ? 'NSP' : emp.seniority));
        console.info(emp.name + ' ' + (!emp.seniority ? 'NSP' : emp.seniority)); // null ou undefined = false
    }
}