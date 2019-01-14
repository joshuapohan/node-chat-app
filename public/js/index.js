var socket = io();

socket.on('connect', function(){
	socket.emit('updateRooms', function(rooms){
		var datalist = jQuery('#roomslist');
		rooms.forEach(function(room){
			datalist.append(jQuery('<option>').attr("value", room));
		});
	})
});