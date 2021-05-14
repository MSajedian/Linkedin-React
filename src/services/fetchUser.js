const fetchUser = async (token) => {
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  try {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', { headers });

    // console.log(response);
    const user = await response.json();
    // console.log(user);
    return user;
  } catch (error) {
    alert('You have an error in fetching user:', error);
  }
};

export default fetchUser;
