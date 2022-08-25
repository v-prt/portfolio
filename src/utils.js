export const observer = () => {
  let faders = document.querySelectorAll('.fade-in')

  let appearOptions = {
    // threshold controls how much of the target should be visible before the effect runs
    threshold: 0.2,
  }

  let appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  faders.forEach(fader => {
    appearOnScroll.observe(fader)
  })
}
