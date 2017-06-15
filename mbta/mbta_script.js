function initMap()
			{
				var station_array_1 = [
				 	alewife = new google.maps.LatLng(42.395428, -71.142483),
				 	davis = new google.maps.LatLng(42.39674, -71.121815),
				 	porter_square = new google.maps.LatLng(42.3884, -71.11914899999999),
				 	harvard_square = new google.maps.LatLng(42.373362, -71.118956),
				 	central_square = new google.maps.LatLng(42.365486, -71.103802),
				 	kendall_mit = new google.maps.LatLng(42.36249079, -71.08617653),
				 	charles_mgh = new google.maps.LatLng(42.361166, -71.070628),
				 	park_street = new google.maps.LatLng(42.35639457, -71.0624242),
				 	downtown_crossing = new google.maps.LatLng(42.355518, -71.060225),
					south_station = new google.maps.LatLng(42.352271, -71.05524200000001),
					broadway = new google.maps.LatLng(42.342622, -71.056967),
					andrew = new google.maps.LatLng(42.330154, -71.057655),
 					jfk_umass = new google.maps.LatLng (42.320685, - 71.052391)]

 					var station_array_2 = [
 						jfk_umass = new google.maps.LatLng (42.320685, - 71.052391),
 						savin_hill = new google.maps.LatLng(42.31129, -71.053331),
 						fields_corner = new google.maps.LatLng(42.300093, -71.061667),
 						shawmut = new google.maps.LatLng(42.29312583, -71.06573796000001),
 						ashmont = new google.maps.LatLng(42.284652, -71.06448899999999)
 					]

 					var station_array_3 = [
 						jfk_umass = new google.maps.LatLng (42.320685, - 71.052391),
 						north_quincy = new google.maps.LatLng(42.275275, -71.029583),
 						wollaston = new google.maps.LatLng(42.2665139, -71.0203369),
 						quincy_center = new google.maps.LatLng(42.251809, -71.005409),
 						quincy_adams = new google.maps.LatLng(42.233391, -71.007153),
 						braintree = new google.maps.LatLng(42.2078543, -71.0011385)
 					]	
			
				// Set up map
				var myOptions = {
					zoom: 13, // The larger the zoom number, the bigger the zoom
					center: south_station,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				// Create the map in the "map_canvas" <div>
				var map = new google.maps.Map(document.getElementById("map"), myOptions);

				// Create markers

				var image = {
					url: 'red_line_marker.png',
					scaledSize: new google.maps.Size(40, 40)
				};

				for ( i = 0; i < station_array_1.length; i++){
					var marker = new google.maps.Marker({
						position: station_array_1[i],
						title: "hi" ,
						icon: image
					});
					marker.setMap(map);
				}

				for ( i = 1; i < station_array_2.length; i++){
					var marker = new google.maps.Marker({
						position: station_array_2[i],
						title: "hi",
						icon: image
					});
					marker.setMap(map);
				}

				for ( i = 1; i < station_array_3.length; i++){
					var marker = new google.maps.Marker({
						position: station_array_3[i],
						title: "hi" ,
						icon: image
					});
					marker.setMap(map);
				}

				var trainPath_1 = new google.maps.Polyline({
					path: station_array_1,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 1.0,
					strokeWeight: 4
				});

				trainPath_1.setMap(map);

				var trainPath_2 = new google.maps.Polyline({
					path: station_array_2,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 1.0,
					strokeWeight: 4
				});

				trainPath_2.setMap(map);

				var trainPath_3 = new google.maps.Polyline({
					path: station_array_3,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 1.0,
					strokeWeight: 4
				});

				trainPath_3.setMap(map);
			}