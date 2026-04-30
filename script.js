<script>
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    document.getElementById("responseMsg").innerText = " Thank you! Your message has been sent.";
    form.reset();
  } else {
    document.getElementById("responseMsg").innerText = " Oops! Something went wrong.";
  }
});
</script>
