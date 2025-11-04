const URL= "https://sdsdnpkbdpnawqwjjtgv.supabase.co/rest/v1/Usuarios";
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2RucGtiZHBuYXdxd2pqdGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjU2NDEsImV4cCI6MjA3Nzg0MTY0MX0.a7GtQ_Ju3ha8ZnFRbEhdNLYcBnMSk6KJGNWy1ZS1_Us';
//obtener todos los usuarios de la tabla usuarios
console.log('Procesando punto 1. ')
fetch (URL,{headers:{'apikey': API_KEY}})
.then(r=>r.json())
.then(data=>console.log('Todos los datos de usuarios estan asi:',data));