import  _ from 'lodash'; 
import $ from 'jquery';

function component(){
    var element = $('<div></div>').html(_.join(['hello','harrisking'],' '));
    return element.get(0);
}

document.body.appendChild(component());