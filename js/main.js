$(document).ready(function(){
    console.log("start -> ok");

    const collection = [];
    for(let i = 101;i<=110;i++){
        collection.push(`img/collection1/p${i}.jpg`)
    }
    console.log('collection->ok');

    const slider = new Slider('slider','1000px','500px',[]);
    slider.loadImages(0,collection);

    slider.activateHandlers();
    console.log('activate -> ok');
});