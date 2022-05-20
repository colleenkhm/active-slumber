const tagMenu = document.getElementById('tagMenu');
// function to generate sleep tags
function genSleepTags() {
    // TODO: Get sleep tag data
    fetch('/api/tags', {
        method: 'get'
    })
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var tagOptions = document.createElement('option')
            tagOptions.innerHTML = data[i].tag_name;
            tagOptions.value = data[i].id;
        }
        tagMenu.appendChild(tagOptions);
    })
    .catch(err => {
        console.error(err)
    })
    // TODO: Iterate through object
    // TODO: Grab tag name and id
    // TODO: append to dropdown options
}
/* <option value="tag_id">tag_name</option> */
genSleepTags();
// Function to collect Sleep Info
async function createSleep(event) {
    event.preventDefault();
    
    //createSleep page imports
    const sleep_title = document.querySelector('#sleep-title').value.trim();
    const sleep_description = document.querySelector('#sleep-description').value.trim();
    const hours_slept = document.querySelector('#sleep-description').value.trim();
    const dream_sw = document.querySelector('#dream-sw').value;
    const dream_description = document.querySelector('#dream-description').value.trim();
    const tagIds = document.querySelector('.tag-dropdown').value;
    
    // Post sleep info to the DB
    if (sleep_title && sleep_description && hours_slept && dream_sw && dream_description && tagIds) {
        const response = await fetch('/api/users/sleep', {
            method: 'post',
            body: JSON.stringify({
                sleep_title,
                sleep_description,
                hours_slept,
                dream_sw,
                dream_description,
                tagIds
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

document.querySelector('.sleep-form').addEventListener('submit', createSleep);