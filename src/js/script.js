const accordeon = document.querySelector(".accordeon");
const details = accordeon.querySelectorAll("details");


details.forEach(det => det.open = false);


details.forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
     
      details.forEach(otherDetail => {
        if (otherDetail !== detail && otherDetail.open) {
          otherDetail.open = false;
        }
      });
    }
  });
});