/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'ikaIllust',
            type:'image',
            rect:['113px','50px','323px','299px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ikaIllust.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ikaIllust}": [
            ["style", "top", '50px'],
            ["style", "left", '113px'],
            ["subproperty", "filter.invert", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "subproperty", "${_ikaIllust}", "filter.invert", '1', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4165546");
