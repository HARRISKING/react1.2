import  _ from 'lodash'; 
import $ from 'jquery';
import foo from './foo'

function component(){
    var element = $('<div></div>').html(_.join(['hilo','harrisking'],' '));
    return element.get(0);
}

document.body.appendChild(component());
console.log(foo())