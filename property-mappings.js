var cabalmap = (function () {
    cabal.components.extend('StatusText', function () {
        var value = this.props.inputs.children; 
        if (value === 'In Progress') this.props.inputs.className = 'green';
        else if (value === 'Onhold') this.props.inputs.className = 'orange';
        else this.props.inputs.className = 'red';
        return (React.DOM.span(this.props.inputs));
    });
    // columns are not related to property mappings
    // row columns are rendered in the order they are passed to
    // property mappings
    var headers = cabal.TableColumnHeaders([
        'Project',
        'Due Date',
        'Status',
        'Customer'
    ]);

    // rendered properties
    var pm = cabal.Properties([
        cabal.mapper.property('Title').as('Link').attributes({ href: cabal.mapper.property('SiteName') }),
        cabal.mapper.property('DateOfAction').as('DateTime'),
        cabal.mapper.property('ProjectStatus').as('StatusText'),
        cabal.mapper.property('Customer'),
    ]);
    // this would be the place to do additional processing on property mappings
    // what ever that is
    return { headers: headers, properties: pm };
})();

var caballist = (function () {
    var labels = cabal.ListItemLabels([
        'Name',
        'Title',
        'Avatar'
    ]);

    var propertymappings = cabal.Properties([
        cabal.mapper.property('DisplayName'),
        cabal.mapper.property('Title'),
        cabal.mapper.property('PictureURL').as('Image')
    ]);

    return { labels: labels, properties: propertymappings };
})();

var results = [
    { Cells: { results:
        [{ Name: 'Title', Value: 'Provision of Customer Relationship Management System', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'Carmen May', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 6, 24)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://www.google.com', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'In Progress', Type: 'Edm.String' }]
    }},

    { Cells: { results:
        [{ Name: 'Title', Value: 'Framework for Executive Search and Recruitment', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'Joshua Harris', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 7, 7)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://virta.baz', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'Onhold', Type: 'Edm.String' }],
    }},

    { Cells: { results:
        [{ Name: 'Title', Value: 'Innovative Ship to Shore Ferry Charging Solution', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'Mario Castro', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 9, 28)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://virta.baz', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'In Progress', Type: 'Edm.String' }],
    }},

    { Cells: { results:
        [{ Name: 'Title', Value: 'Installation of Energy Efficiency Measures', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'Lonnie Hunt', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 8, 11)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://virta.baz', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'In Progress', Type: 'Edm.String' }],
    }},

    { Cells: { results:
        [{ Name: 'Title', Value: 'Replacement Pipework', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'Emma Howard', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 7, 11)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://virta.baz', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'Onhold', Type: 'Edm.String' }],
    }},

    { Cells: { results:
        [{ Name: 'Title', Value: 'Broadcasting Equipment and Associated Infrastructure', Type: 'Edm.String' },
         { Name: 'Customer', Value: 'George Hudson', Type: 'Edm.String' },
         { Name: 'DateOfAction', Value: (new Date(2014, 6, 22)).toISOString(), Type: 'Edm.DateTime' },
         { Name: 'SiteName', Value: 'http://mcninja.com', Type: 'Edm.String' },
         { Name: 'ProjectStatus', Value: 'Late', Type: 'Edm.String' }]
    }},
];

var people = [
    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Lydia Fernandez' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/women/94.jpg' },
         { Name: 'Title', Value: 'User Experience Manager' },
         { Name: 'Email', Value: 'lydia.fernandez12@example.com' },
         { Name: 'Mobile', Value: '(317)-468-8105' }],
    }},

    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Jeff Bailey' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/men/80.jpg' },
         { Name: 'Title', Value: 'Content Ninja' },
         { Name: 'Email', Value: 'jeff.bailey91@example.com' },
         { Name: 'Mobile', Value: '(169)-716-6932' }],
    }},

    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Donald Gardner' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/men/15.jpg' },
         { Name: 'Title', Value: 'Brand Manager' },
         { Name: 'Email', Value: 'donald.gardner59@example.com' },
         { Name: 'Mobile', Value: '(925)-983-8035' }],
    }},

    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Joan Alexander' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/women/34.jpg' },
         { Name: 'Title', Value: 'Lead Developer' },
         { Name: 'Email', Value: 'joan.alexander27@example.com' },
         { Name: 'Mobile', Value: '(698)-213-7104' }],
    }},

    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Laurie Allen' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/women/45.jpg' },
         { Name: 'Title', Value: 'Systems Engineer' },
         { Name: 'Email', Value: 'laurie.allen93@example.com' },
         { Name: 'Mobile', Value: '(924)-587-2336' }],
    }},

    { Cells: { results:
        [{ Name: 'DisplayName', Value: 'Salvador Stevens' },
         { Name: 'PictureURL', Value: 'http://api.randomuser.me/portraits/men/84.jpg' },
         { Name: 'Title', Value: 'Infrastructure Specialist' },
         { Name: 'Email', Value: 'salvador.stevens22@example.com' },
         { Name: 'Mobile', Value: '(118)-454-1902' }]
    }},
];

(function () {
    cabal.app(results).Table(cabalmap, document.getElementById('tableGoesHere'));
    cabal.app(people).List(caballist, document.getElementById('peopleGoesHere'));
})();
