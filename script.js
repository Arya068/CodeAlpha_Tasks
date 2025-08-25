        function calculateAge() {
        let dob = document.getElementById("dob").value;
        if (!dob) {
          document.getElementById("result").innerHTML = "⚠️ Please select your Date of Birth!";
          return;
        }

        let birthDate = new Date(dob);
        let today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
          months--;
          let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          days += prevMonthDays;
        }

        if (months < 0) {
          years--;
          months += 12;
        }

        if (years < 0) {
          document.getElementById("result").innerHTML = "⚠️ Invalid Date of Birth!";
          return;
        }

        document.getElementById("result").innerHTML =
          `Your Age is <br> ${years} Years, ${months} Months, ${days} Days`;
      }
 
