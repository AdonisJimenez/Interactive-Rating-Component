const rating1 = document.getElementById("rating1");
const rating2 = document.getElementById("rating2");
const rating3 = document.getElementById("rating3");
const rating4 = document.getElementById("rating4");
const rating5 = document.getElementById("rating5");
const btn = document.getElementById("btn");

const votingSection = document.getElementById("voting__section")
const thankSection = document.getElementById("thank__section")
const finalRating = document.getElementById("finalRating")

thankSection.style.display = "none"

rating1.addEventListener("click", () => {
    rating1.classList.toggle("ratingSelected")
    rating2.classList.remove("ratingSelected")
    rating3.classList.remove("ratingSelected")
    rating4.classList.remove("ratingSelected")
    rating5.classList.remove("ratingSelected")
    finalRating.textContent = "1"
})

rating2.addEventListener("click", () => {
    rating1.classList.remove("ratingSelected")
    rating2.classList.toggle("ratingSelected")
    rating3.classList.remove("ratingSelected")
    rating4.classList.remove("ratingSelected")
    rating5.classList.remove("ratingSelected")
    finalRating.textContent = "2"
})
rating3.addEventListener("click", () => {
    rating1.classList.remove("ratingSelected")
    rating2.classList.remove("ratingSelected")
    rating3.classList.toggle("ratingSelected")
    rating4.classList.remove("ratingSelected")
    rating5.classList.remove("ratingSelected")
    finalRating.textContent = "3"
})
rating4.addEventListener("click", () => {
    rating1.classList.remove("ratingSelected")
    rating2.classList.remove("ratingSelected")
    rating3.classList.remove("ratingSelected")
    rating4.classList.toggle("ratingSelected")
    rating5.classList.remove("ratingSelected")
    finalRating.textContent = "4"
})
rating5.addEventListener("click", () => {
    rating1.classList.remove("ratingSelected")
    rating2.classList.remove("ratingSelected")
    rating3.classList.remove("ratingSelected")
    rating4.classList.remove("ratingSelected")
    rating5.classList.toggle("ratingSelected")
    finalRating.textContent = "5"
})

btn.addEventListener("click", () => {
    if (rating1.classList.contains("ratingSelected") || rating2.classList.contains("ratingSelected") || rating3.classList.contains("ratingSelected") || rating4.classList.contains("ratingSelected") || rating5.classList.contains("ratingSelected")) {
        
        votingSection.style.display = "none"
        thankSection.style.display = "block"
    }
})
