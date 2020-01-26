var app = angular.module('resume', [])
    .controller('personCtrl', function ($scope) {
    $scope.personInfo = {
        name: 'Akash Jain',
        description: 'software engineer',
        email: {
            text: 'akash982jain@gmail.com',
			url: 'mailto:akash982jain@gmail.com'
		},
		phone: {
			text: '+91 9717524567'
		},
        social: [{
                url: 'https://github.com/Akash20x',
                icon: 'fa-github fa-lg'
            }, {
                url: 'https://www.linkedin.com/in/akash-jain-0b7523133',
                icon: 'fa-linkedin fa-lg'
            }, 
			 
			]
    };
})
    .controller('educationCtrl', function ($scope) {
    $scope.schools = [{
            name: 'Bmiet',
            program: 'Computer Science and Engineering',
            city: 'Delhi',
			state: 'Delhi',
			dates: '2018 - 2022',
        }];
})
    .controller('languagesCtrl', function ($scope) {
    $scope.languages = [{
            types: [
                'Python',
                'JavaScript',
                'Html'
            ]
        }, {
            types: [
				'C++',
                'CSS',
				'MySQL'
            ]
        }, {
            types: [
                'Java',
                'JSON',
                'jQuery',
            ]
        }];
})
    .controller('toolsCtrl', function ($scope) {
    $scope.tools = [{
            types: [
                'Git',
                'Github',
                'Bootstrap'
            ]
        }, {
            types: [
				'AngularJS',
				'Frappe',
                'NodeJS',
            ]
        }, {
            types: [
                'Flask',
				'MongoDB',
				'Android Studio'
            ]
        }];
})
    .controller('organizationCtrl', function ($scope) {
    $scope.organizations = [
        {
            name: 'Frappe Technologies, Pvt. Ltd.',
            url: 'https://frappe.io/',
            positions: [{
                    title: 'Software Engineer',
                    responsibilities: [
                        'Developed and designed features for their flagship open source   product - ERPNext, which is built on their home ground JS framework - Frappe.',
						'A hands-on experience with Frappe framework  which is a full stack web application framework written in Python, Javascript, HTML/CSS with MySQL as the backend.',
						'Wrote UI test cases (in JavaScript) as well as Unit test cases (in Python) to test and debug features, documented scripts and features.',
                        'Identified and communicated technical problems, processes and solutions.',
						'Assisted in the collection and documentation of user requirements.',
						'One of the key members in the development of their eagerly awaited and massive release - ERPNext version 11.',
                        'Version control with Git.'
                    ]
                }],
            dates: 'August 2017 - Present'
        }
    ];
})
    .controller('projectsCtrl', function ($scope) {
    $scope.projects = [
        {
			name: 'Credit card reader using webcam',
			description: 'Developed for a design engineering project, payments for online transactions could be done using webcam which recognizes the user\'s face using OpenCV, matches with the MySQL database and authorizes the payment.'
        },
        {
			name: 'Business meetings, conferences and complaints management',
			description: 'Developed using .net MVC architecture for the web application and also\
			created an android app along with it. Used to manage the employee details\
			and database in a company.'
        },
        {
            name: 'Contact list App',
            url: 'https://github.com/shreyashah115/Contactlistapp',
            description: 'Developed under the MEAN Stack environment, stores details of a contact,\
			allows to edit, update and delete.'
		},
		{
            name: 'Expense Manager App',
			url: 'https://github.com/shreyashah115/Expenso',
			description: 'Developed under the MEAN Stack environment along with CSS and Bootstrap\
			framework, calculates your daily expenses, stores them in the database and\
			retrieves it for you to manage your budget.'
		},
		{
            name: 'Inventory Management',
			url: 'https://github.com/shreyashah115/InventoryApp',
			description: 'Developed using the Flask web framework, Html and AngularJS, like a simple point on sale system, which helps the shop owner to add, modify and remove the products, along with an option to view the updated amount of products '
        }
    ];
});
