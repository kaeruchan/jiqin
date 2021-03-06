(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('I'))
        .then(() => engine.shake())
        .then(() => engine.toText('LOVE'))
        .then(() => engine.shake())
        .then(() => engine.toText('YOU'))
        .then(() => engine.shake())
        .then(() => engine.toText('陳季芹'))
        .then(() => engine.shake())
        .then(() => engine.toText('一週年'))
        .then(() => engine.shake())
        .then(() => engine.toText('我還會'))
        .then(() => engine.shake())
        .then(() => engine.toText('繼續加油的'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
