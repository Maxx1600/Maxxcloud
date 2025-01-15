<div formsappId="678696155b87765987eb6b82"></div>
<script src="https://forms.app/static/embed.js" type="text/javascript" async defer onload="new formsapp('678696155b87765987eb6b82', 'fullscreen', {}, 'https://2c4tbyb6.forms.app');"></script>

<script>
  function handleCredentialResponse(response) {
    // Hier kannst du die Antwort des Google-OAuth-Prozesses verarbeiten
    const responsePayload = decodeJwtResponse(response.credential);
    console.log("ID-Token: ", responsePayload);
    
    // Du kannst nun die Benutzerdaten extrahieren und weiterverwenden
    // Beispiel: responsePayload.sub gibt die Benutzer-ID von Google zurück.
  }

  function decodeJwtResponse(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
</script>
