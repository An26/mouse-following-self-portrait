var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;




var horizSliderVal = 0;
var vertSliderVal = 0;

addEvent(document, "mousemove", function(e) {
  horizSliderVal = (x / 2 - e.clientX) / (x / 2) * -1;
  vertSliderVal = (y / 2 - e.clientY) / (y / 2);
  makeFaceMove();
});

addEvent(document, "resize", function() {
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
});

function makeFaceMove() {
  var elementAndPositionList = [];

  // nose
  var noseProps = {
    "elementName": ".nose",
    "props": {
      "left": (50 + (17.5 * horizSliderVal)).toString() + "%",
      "top": (48 - (10 * vertSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(noseProps);

  // eyes
  var eyeProps = {
    "elementName": ".eyes",
    "props" : {
      "left": (50 + (15 * horizSliderVal)).toString() + "%",
      "top": (50 - (9 * vertSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(eyeProps);

  var leftEyeProps = {
    "elementName": ".eye-left",
    "props" : {
      "left": (2.5 - (5 * horizSliderVal)).toString() + "%",
      "width": (40 + (5 * horizSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(leftEyeProps);

  var leftPupilProps = {
    "elementName": ".pupil-left",
    "props": {
      "left": (54 + (10 * horizSliderVal)).toString() + "%",
      "top": (31 - (20 * vertSliderVal)).toString() + "%",
    }
  }
  elementAndPositionList.push(leftPupilProps);

  var rightPupilProps = {
    "elementName": ".pupil-right",
    "props": {
      "left": (40 + (10 * horizSliderVal)).toString() + "%",
      "top": (31 - (20 * vertSliderVal)).toString() + "%",
    }
  }
  elementAndPositionList.push(rightPupilProps);

  var rightEyeProps = {
    "elementName": ".eye-right",
    "props" : {
      "right": (2.5 + (5 * horizSliderVal)).toString() + "%",
      "width": (40 - (5 * horizSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(rightEyeProps);


  var faceProps = {
    "elementName": ".face",
    "props" : {
      "left": (50 + (2 * horizSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(faceProps);

  var mouthProps = {
    "elementName": ".mouth",
    "props" : {
      "left": (50 - (1.5 * horizSliderVal)).toString() + "%",
      "top": (76 - (5 * vertSliderVal)).toString() + "%",
      "width": (15 - (2.5 * Math.abs(horizSliderVal))).toString() + "vh",
      "height": (10 - (2.5 * Math.abs(vertSliderVal))).toString() + "vh"
    }
  }
  elementAndPositionList.push(mouthProps);

  var teethProps = {
    "elementName": ".teeth",
    "props" : {
      "left": (50 - (10 * horizSliderVal)).toString() + "%",
      "top": "-" + (28 + (25 * Math.abs(vertSliderVal))).toString() + "%"
    }
  }
  elementAndPositionList.push(teethProps);

  var tongueProps = {
    "elementName": ".tongue",
    "props" : {
      "left": (50 - (100 * parseFloat(horizSliderVal))).toString() + "%",
      "top": (70 + (50 * vertSliderVal)).toString() + "%",
      //"width": (30 - (20 * Math.abs(vertSliderVal))).toString() + "vh"
    }
  }
  elementAndPositionList.push(tongueProps);

  var earProps = {
    "elementName": ".ears",
    "props" : {
      "left": (50 - (2.5 * horizSliderVal)).toString() + "%",
      "top": (42 + (2.5 * vertSliderVal)).toString() + "%"
    }
  }
  elementAndPositionList.push(earProps);

  var leftEarProps = {
    "elementName": ".ear-left",
    "props" : {
      "left": 2.5 * Math.abs(horizSliderVal).toString() + "%",
      "width": (10 + (2.5 * horizSliderVal)).toString() + "vh",
      "height": (15 - (2.5 * Math.abs(vertSliderVal))).toString() + "vh"
    }
  }
  elementAndPositionList.push(leftEarProps);

  var rightEarProps = {
    "elementName": ".ear-right",
    "props" : {
      "right": 2.5 * Math.abs(horizSliderVal).toString() + "%",
      "width": (10 - (2.5 * horizSliderVal)).toString() + "vh",
      "height": (15 - (2.5 * Math.abs(vertSliderVal))).toString() + "vh"
    }
  }
  elementAndPositionList.push(rightEarProps);

  var bangsProps = {
    "elementName": ".quiff",
    "props" : {
      "left": (50 - (2.5 * horizSliderVal)).toString() + "%",
      "height": (28 - (2.5 * vertSliderVal)).toString() + "vh"
    }
  }
  elementAndPositionList.push(bangsProps);

  moveElements(elementAndPositionList);
};

function moveElements(elementAndPositionList) {
  for (var i = 0, len = elementAndPositionList.length; i < len; ++i) {
    var element = $(elementAndPositionList[i].elementName);
    for(var key in elementAndPositionList[i].props) {
      // console.log(elementAndPositionList[i].elementName);
      element.css(
        key,
        elementAndPositionList[i].props[key]
      );
    }
  }
}