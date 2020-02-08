/**
 *  Custom Checkbox - Version 1.1
 *  Copyright (c) 2016-2019 Grzegorz Miskiewicz (avatecpl@gmail.com)
 *  Visit my website: http://www.avatec.pl
 *
 *  This program is free software: you can redistribute it and/or modify it
 *  under the terms of the GNU General Public License as published by the Free
 *  Software Foundation, either version 3 of the License, or (at your option)
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful, but WITHOUT
 *  ANY WARRANTY; without even the implied warranty of  MERCHANTABILITY or
 *  FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 *  more details.
 *
 *  You should have received a copy of the GNU General Public License along with
 *  this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var checkbox = document.querySelectorAll('.checkbox label input[type=checkbox]');
if( checkbox.length > 0 ) {
    for( var i=0; i<checkbox.length; i++ ) {
        checkbox[i].addEventListener('click' , CheckboxMarkAsChecked, true );
    }
}

var radio = document.querySelectorAll('.radio label input[type=radio]');
if( radio.length > 0 ) {
    for( var i=0; i<checkbox.length; i++ ) {
        radio[i].addEventListener('click' , RadioMarkAsChecked, true );
    }
}

function CheckboxMarkAsChecked( e )
{
    if( e.target.checked == false ) {
        e.target.parentNode.parentNode.classList.remove('checkbox-checked');
        this.removeAttribute('checked');
    } else {
        e.target.parentNode.parentNode.classList.add('checkbox-checked');
        this.setAttribute('checked' , 1);
    }
}

function RadioMarkAsChecked( e )
{
    var name = e.target.getAttribute('name');
    var radios = document.querySelectorAll('input[name="' + name + '"]');
    radios.forEach( function( ev , i ) {
        if( ev.parentNode.parentNode.classList.contains('radio-checked') ) {
            ev.parentNode.parentNode.classList.remove('radio-checked');
            ev.removeAttribute('checked');
        }
    });

    e.target.parentNode.parentNode.classList.add('radio-checked');
    this.setAttribute('checked' , 1);
}

function Reload()
{
    var cb = document.querySelectorAll(".checkbox");
    if( cb.length > 0 ) {
        for( var i=0; i<cb.length; i++ ) {
            if( cb[i].childNodes > 0 ) {
                var cbl = cb[i].childNodes[0];
                var cbl_checked = cbl.childNodes[0].hasAttribute('checked');
            }
            if( cbl_checked ) {
                cb[i].classList.add('checkbox-checked');
            }

        }
    }

    var rb = document.querySelectorAll(".radio");
    if( rb.length > 0 ) {
        for( var i=0; i<rb.length; i++ ) {
            if( rb[i].childNodes > 0 ) {
                var rbl = rb[i].childNodes[0];
                var rbl_checked = rbl.childNodes[0].hasAttribute('checked');
            }

            if( rbl_checked ) {
                rb[i].classList.add('radio-checked');
            }
        }
    }
}

window.onload = function() {
    Reload();
}
