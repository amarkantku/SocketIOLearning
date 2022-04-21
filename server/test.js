// Handle connection
io.on('connection', function (socket) {
    console.log("Connected succesfully to the socket ...");
    const news = [
        { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
        { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
        { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
        { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
    ];
    // Send news on the socket
    socket.emit('news', news);

    socket.on('my other event', function (data) {
        console.log(data);
    });

    socket.emit('counter updated', count);
    socket.on('counter clicked', () => {
        // increment the count
        count++;
        // emit to EVERYONE the updated count
        io.emit('counter updated', count);
      });
});