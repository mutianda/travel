
let defCity = '南京'
try {
  if (localStorage.city) {
    defCity = localStorage.city
  }
} catch (e) {
}
export default {
  city: defCity
}
