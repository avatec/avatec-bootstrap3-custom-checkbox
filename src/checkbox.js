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
        checkbox[i].addEventListener('click' , markAsChecked, true );
    }
}

function markAsChecked( e )
{
    if( e.target.checked == false ) {
        e.target.parentNode.parentNode.classList.remove('checkbox-checked');
        this.removeAttribute('checked');
    } else {
        e.target.parentNode.parentNode.classList.add('checkbox-checked');
        this.setAttribute('checked' , 1);
    }
}

function ReloadChecked()
{
    var cb = document.querySelectorAll(".checkbox");
    if( cb.length > 0 ) {
        for( var i=0; i<cb.length; i++ ) {
            var cbl = cb[i].childNodes[0];
            if( cbl.childNodes[0].hasAttribute('checked') ) {
                cb[i].classList.add('checkbox-checked');
            }
        }
    }
}

window.onload = function() {
    ReloadChecked();
}
