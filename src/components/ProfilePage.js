import React from "react";


function ProfilePage() {
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload(); // To redirect to the Login page
  };

  return (
    <div className="h-[100vh] p-4">
      <div className="profile-container">
        <h2 className="mb-2 text-2xl font-bold text-center">User Profile</h2>
        <div className="p-4 space-y-2 bg-white shadow-lg rounded-2xl">
        <div className="profile-image">
          <img src="https://media1.tenor.com/m/sp4DDGym2b4AAAAd/bailu.gif" className="size-[15vh] rounded-full mx-auto" alt="Profile" />
        </div>
        <div className="grid grid-cols-3">
        <p><strong>Username</strong> </p>
          <p className="col-span-2">: John Doe</p>
        <p><strong>Date of Birth</strong> </p>
          <p className="col-span-2">: 15-01-2005</p>
        <p><strong>Email</strong> </p>
          <p className="col-span-2">: johndoe@example.com</p>
        <p><strong>Favorite Genre</strong></p>
          <p className="col-span-2">: Romance</p>
        <p><strong>Country</strong> </p>
          <p className="col-span-2">: Indonesia</p>
        <p><strong>Occupation</strong> </p>
          <p className="col-span-2">: University Student</p>
        </div>
        </div>
        <button className="p-2 mx-auto my-5 font-bold text-white bg-red-600 rounded-lg" onClick={handleLogout}>Logout</button>

        <img src="https://media1.tenor.com/m/cFpj9gk2k3UAAAAC/chat-honkai.gif" className="rounded-lg" alt="leon"></img>
      </div>
    </div>
  );
}

export default ProfilePage;
