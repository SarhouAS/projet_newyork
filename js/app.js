const City = ({
    Image : "/",
    Title : "À propos",
    Ville : `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme 
    l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo : "3°C, vent NO à 10 km/h, 58 % d'humidité weather.com",
    Quartiers : "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS",
    Population : "8,468 millions (2021)",
    Superficie : "783,8 km²"
})
const json = JSON.stringify(City)
console.log(json+"\n")

for(let index in City){
console.log(index+" "+City[index]+'\n')
}