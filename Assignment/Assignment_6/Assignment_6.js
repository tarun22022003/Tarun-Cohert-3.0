      const slider = document.querySelector(".slider");
      const arrow = document.querySelector("#arrow");
      const text = document.querySelector("#boldtext");
      const sub_text = document.querySelector("#sub_boldtext");

      let currentSlide = 0;

      arrow.addEventListener("click", (e) => {
        

        e.preventDefault();

        if (currentSlide === 0) {
         text.textContent= "A cup that fits the moment.";
         sub_text.textContent='From compostable whole leaf tea sachets and iced tea to tea lattes and matcha, we\'ve got something for everyone';
         text.style.color ="white";
         sub_text.style.color ="white";
          slider.scrollTo({
            left: slider.clientWidth,
            behavior: "smooth",
          });
          currentSlide = 1;
          arrow.classList.add("left");
          arrow.textContent = "<";     
        } else {   text.textContent= "Meet Your Matcha.";
                   sub_text.textContent='Whether your mornings are more grab-and-go or intentional and slow, we have matcha and matcha lattes for every ritual.';
                    text.style.color ="black";
                    sub_text.style.color ="black";
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
            
          });

          currentSlide = 0;
          arrow.classList.remove("left");
          arrow.textContent = ">";
        }
        
      });