        /*  add the script in head for now because do not need document onload  */
        function bttnEngineering_show() {
            modal = $("#modalWindow").modal('show');
        };

        function bttnEngineering_hide() {
            modal = $("#modalWindow").modal('hide');
        };

        //const videoElement = document.getElementById('pageVideo');

        function jumpMovieTime(timeInSecs) {
            let videoElement = document.getElementById('pageVideo');
            // Check if the video's metadata is loaded before seeking
            if (videoElement.readyState >= 1) { // readyState 1 means HAVE_METADATA
                videoElement.currentTime = timeInSecs; // Set the new timestamp
                videoElement.play(); // Start playing from the new point
            } else {
                // If metadata isn't loaded yet, wait for the 'loadedmetadata' event
                videoElement.addEventListener('loadedmetadata', function() {
                    videoElement.currentTime = timeInSecs;
                    videoElement.play();
                });
            }           
        };

        function linkClick(linkElement) {
            let linkNum = linkElement.dataset.linkNum;
            let movieTime_str = linkElement.dataset.movieTime;
            let movieTime = parseFloat(movieTime_str);
            console.log("num=", linkNum, " time=", movieTime);
            jumpMovieTime(movieTime);
        };

        async function includeHeader() {
            try {
                const response = await fetch('header.html');
                const data = await response.text();
                document.getElementById('masthead').innerHTML = data;
            } catch (error) {
                console.error('Error fetching header:', error);
            }
        };

        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
            // Your JavaScript code here
            const quickLinks = document.querySelectorAll('.qklink');

            quickLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    linkClick(this);
                });
            });

            //load the header from a file
            //includeHeader();  
        });
