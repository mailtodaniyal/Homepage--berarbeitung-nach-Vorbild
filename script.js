        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
                document.getElementById('contactForm').reset();
            } else {
                alert('Bitte füllen Sie alle Pflichtfelder aus.');
            }
        });
