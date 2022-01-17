const DAYSAGO = 22;

const clist = [{
    API: buildApiUrl('statistics/supporters/day', DAYSAGO, 2),
    bindto: '#supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'day' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': TTBLACK,
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/active/day', DAYSAGO, 2),
    bindto: '#active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'day' },
        type: 'bar',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': TTRED,
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/feeds/day', DAYSAGO, 2),
    bindto: '#feeds-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [
            "total", "foryou", "following", "creator", "leftover", ],
            x: 'day'
        },
        type: 'bar',
        colors: {
            "total": TTBLACK,
            "foryou": TTRED,
            "following": TTBLUE,
            "creator": ICBLUISH,
            "leftover": ICREDDISH
        },
        groups: [
            [ "foryou", "following", "creator" ]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/search/day', DAYSAGO, 2),
    bindto: '#search-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ "search", "rejected" ],
            x: 'day'
        },
        type: 'bar',
        colors: {
            "search": TTRED,
            "rejected": TTBLUE,
        },
        labels: { show: true },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/processing/day', DAYSAGO, 2),
    bindto: '#processing-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total', 'successful', 'failure'], x: 'day' },
        type: 'bar',
        colors: {
            'total': TTBLACK,
            'successful': TTBLUE,
            'failure': TTRED, 
        },
        labels: { show: true },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}];

$(document).ready(async function() {

    var graphNodes = $('.c3graph');
    console.log("Retrieved", _.size(graphNodes), "from the impact.md page");

    const graphs = _.compact(_.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;

        const config = _.find(clist, { bindto: graphId });
        if(!config) {
            console.log("Invalid ID", graphId, "not found among the c3 configs");
            return null;;
        }
        return {
            config,
            graphId
        }
    }));

    for (const g of graphs) {
        const connection = await fetch(g.config.API);
        const content = await connection.json();
        if(content.error) {
            console.log("Error received!", g.graphId, JSON.stringify(content));
            $(g.graphId).html('<h5 style="color:red">' + content.note + '</h5>');
        } else if (!_.size(content)) {
            console.log("Empty answer for", g.graphId, JSON.stringify(content));
        } else {
            console.log("Generating graph", g.graphId, g,
                        "Retrieved", _.size(content),
                        "adding to config.data https://c3js.org/reference.html");
            g.config.data.json = content;
            const retval = c3.generate(g.config);
            // retval currently not used for updates
        }
    }
});
