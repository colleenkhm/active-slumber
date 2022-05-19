async function createSleep(event) {
    event.preventDefault();
    
    //createSleep page imports
    const sleep_title = document.querySelector('#sleep-title').value.trim();
    const sleep_description = document.querySelector('#sleep-description').value.trim();
    const hours_slept = document.querySelector('#sleep-description').value.trim();
    const dream_sw = document.querySelector('#dream-sw');
    const dream_description = document.querySelector('#dream-description').value.trim();
    const tagIds = document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.tag-dropdown');
        var instances = M.Dropdown.init(elems, options);
      });

    if (sleep_title && sleep_description && hours_slept && dream_sw && dream_description && tagIds) {
        const response = await fetch('/api/users/signup', {
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
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupForm);