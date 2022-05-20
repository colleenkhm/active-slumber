// document.addEventListener('DOMContentLoaded', function() {
//     var dropdown1 = document.querySelector('.tag-dropdown');
//     var dropdownOptions = {
//         'closeOnClick': true,
//         'coverTrigger': false,
//         'hover':true
//     }
//     var instanceDropdown1 = M.Dropdown.init(dropdown1, dropdownOptions);
// });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

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

document.querySelector('.sleep-form').addEventListener('submit', createSleep);