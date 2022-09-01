const update = () => {
  window.location.pathname = "home/srinivas/Desktop/guvi-project/update.html";
};

const doUpdate = async () => {
  let id = localStorage.getItem("userId");
  let age = document.getElementById("age")?.value;
  let dob = document.getElementById("dob")?.value;
  let contact = document.getElementById("contact")?.value;
  let address = document.getElementById("address")?.value;
  let pincode = document.getElementById("pincode")?.value;
  await axios
    .post("http://localhost:4000/profile/update", {
      id,
      age,
      dob,
      contact,
      address,
      pincode,
    })
    .then((response) => {
      console.log("ss");
    })
    .catch((err) => console.error(err));
};

const getInfo = async () => {
  const id = localStorage.getItem("userId");
  await axios.get(`http://localhost:4000/profile/profileInfo/${id}`);
};
