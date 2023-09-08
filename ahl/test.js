const url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

// Define the request headers
const headers = {
  "Content-Type": "application/json",
};

// Define the request body
const data = {
  login_id: "test@sunbasedata.com",
  password: "Test@123",
};

// Send a POST request to authenticate the user
fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Authentication failed with status code: ${response.status}`);
    }
  })
  .then((data) => {
    // Extract the bearer token from the response
    const token = data.token;
    if (token) {
      // Now, you can use this bearer token in subsequent API calls
      console.log(`Bearer Token: ${token}`);
    } else {
      console.log("Bearer token not found in the response.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
  console.log("Bearer token not found in the response.");