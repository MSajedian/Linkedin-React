const getUsers = async (token) => {
  const headers = {
    Authorization: "Bearer " + token,
  };

  try {
    const response = await fetch( "https://striveschool-api.herokuapp.com/api/profile/", { headers } );
    // console.log(response);
    if (response.ok) {
      const listOfUsers = await response.json();
      // console.log(listOfUsers);
      return listOfUsers;
    } else {
      alert("Error in response");
    }
  } catch (error) {
    alert("You have an error:", error);
  }
};

export default getUsers;
