(() => {
    //make an AJAX request using the Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        debugger;
        console.log(data);

        //handleData
        //here's where you would call the function that puts the pieces on page
        handleDataSet(data);
    })
    .catch ((err) => {
        console.log(err);
    })

    // I will create function handleData in here
    function handleDataSet(data) {
        debugger;

        //select proPanleText elements and all <p> tag and <ul> tag from index.html
        let profPanelText =  document.querySelector('.profPanelText'),
            profPanelCon = profPanelText.children;
        //using textContent to represents the text content of the node
        //the first children of proPanelCon will show the course name and couse code from the classData file
        //computer start counting from 0 
        
        profPanelCon[0].textContent = classData.coursename + " , " + classData.coursecode;

        //the sencond children of proPanelCon will show the Professor and profnam from the classData file
        profPanelCon[1].textContent = "Professor - " + classData.profname;

        //we also need to represent the time of the course
        //the time of the couse will show the classtime from the classData files
    
        profPanelCon[2].textContent = classData.classtime[0] + " , " + classData.classtime[1];


    }
})();