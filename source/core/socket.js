"use strict";
/*
    OpenAgar - Open source web game
    Copyright (C) 2016 Andrew S

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
const RSON = require('rson')
const LZString = require('../modules/LZString.js')
module.exports = class Socket {
    constructor(socket, player) {
        this.player = player;
        this.socket = socket


        this.remoteAddress = socket.IP;
        this.IPv6 = socket.IPv6;
    }
    sendNodes(dt) {

        this.socket.socket.send(dt, {
            binary: true
        });

    }
    sendDelete(tex) {

        this.socket.hasBinary(false).emit('delnodes', tex)
    }
    disconnect() {
        this.socket._diconnect = true;
        this.socket.disconnect()

    }
    emit(a, b) {

        this.socket.emit(a, b)
    }


}
