var Airtable = require('airtable');
var base = new Airtable({apiKey:'keycXkSkSRAAK3Y8G'}).base('appjyVMWWX26yFWud');

base('Table 1').find('rec4mBVQBXkoHki2g', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text1');
    myElement.innerHTML = record.get('Description');
}, function done(err) {
    if (err) { console.error(err); return; }
});


base('Table 1').find('rec4mBVQBXkoHki2g', function(err, record) {
    if (err) { console.error(err); return; }
    record.fields.Image.forEach(function(image){
        console.log(image.url);
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', image.url);
        var mainElement = document.querySelector('.main1');
        mainElement.appendChild(imageElement);
    });

}, function done(err) {
    if (err) { console.error(err); return; }
});


base('Table 1').find('recsmCbWeJVICfkdw', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text2');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});

base('Table 1').find('recsmCbWeJVICfkdw', function(err, record) {
    if (err) { console.error(err); return; }
    record.fields.Image.forEach(function(image){
        console.log(image.url);
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', image.url);
        var mainElement = document.querySelector('.main2');
        mainElement.appendChild(imageElement);
    });
    
}, function done(err) {
    if (err) { console.error(err); return; }
});


base('Table 1').find('rect0kwUTNSlgtnyS', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text3');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});

base('Table 1').find('rect0kwUTNSlgtnyS', function(err, record) {
    if (err) { console.error(err); return; }
    record.fields.Image.forEach(function(image){
        console.log(image.url);
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', image.url);
        var mainElement = document.querySelector('.main3');
        mainElement.appendChild(imageElement);
    });
    
}, function done(err) {
    if (err) { console.error(err); return; }
});

base('Table 1').find('recBWxNXZxJMLMFlK', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('Description'));
    var myElement = document.getElementById('text4');
    myElement.innerHTML = record.get('Description');

}, function done(err) {
    if (err) { console.error(err); return; }
});

base('Table 1').find('recBWxNXZxJMLMFlK', function(err, record) {
    if (err) { console.error(err); return; }
    record.fields.Image.forEach(function(image){
        console.log(image.url);
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', image.url);
        var mainElement = document.querySelector('.main4');
        mainElement.appendChild(imageElement);
    });
    
}, function done(err) {
    if (err) { console.error(err); return; }
});