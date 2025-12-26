
document.addEventListener("DOMContentLoaded",()=>{

  /* ===== Active nav ===== */
  document.querySelectorAll("nav a").forEach(link=>{
    if(link.getAttribute("href") === location.pathname.split("/").pop()){
      link.style.textDecoration = "underline";
    }
  });

  /* ===== Smooth scroll for anchors ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  /* ===== Booking form enhancements ===== */
  const form = document.getElementById("bookingForm");
  if(form){
    const msg = document.getElementById("msg");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.querySelector("input[name='name']")?.value || "—";
      const service = form.querySelector("select[name='service']")?.value || "—";
      const doctor = form.querySelector("select[name='doctor']")?.value || "—";
      const date = form.querySelector("input[name='date']")?.value || "—";
      const time = form.querySelector("input[name='time']")?.value || "—";

      msg.innerHTML = `
        <strong>✅ تم تأكيد الحجز</strong><br>
        الاسم: ${name}<br>
        الخدمة: ${service}<br>
        الدكتور: ${doctor}<br>
        الموعد: ${date} - ${time}
      `;
    });
  }

  /* ===== Cards hover animation ===== */
  document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseenter",()=>{
      card.style.transform="translateY(-6px)";
    });
    card.addEventListener("mouseleave",()=>{
      card.style.transform="translateY(0)";
    });
  });

});
