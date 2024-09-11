document.getElementById('downloadButton').addEventListener('click', function() {
    // Specify the path to your local file
    const filePath = 'cv/cv.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'cv.pdf'; // The name of the file to be downloaded
    
    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(link);
    
    // Trigger the click event on the anchor
    link.click();
    
    // Remove the anchor from the document
    document.body.removeChild(link);
});
